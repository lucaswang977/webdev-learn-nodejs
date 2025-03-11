# GraphQL Learning Notes

- [GraphQL Learning Notes](#graphql-learning-notes)
  - [Introduction](#introduction)
  - [Schemas and Types](#schemas-and-types)
    - [Object types and fields](#object-types-and-fields)
    - [Scalar types](#scalar-types)
    - [Enum types](#enum-types)
    - [Interface types](#interface-types)
    - [Union types](#union-types)
    - [Input Object types](#input-object-types)
    - [Directives](#directives)
  - [Queries](#queries)
  - [References](#references)

## Introduction
* GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data.
  * Describe your API with a type system.
  * Query exactly what you need.
  * Evolve your API without versioning.
## Schemas and Types
* Schema: Every GraphQL service defines a set of types that completely describe the set of possible data we can query on that service. Then, when requests come in, they are validated and executed against that schema.
* Type modifiers: Types are assumed to be nullable and singular by default in GraphQL. 
  * Non-Null: Server always expects to return a non-null value for this field. Exclamation mark (!) after the type name.
  * List: This field will return an array of that type. Wrapping the type in square brackets, [ and ]. 
    ```graphql
    # list itself can be null, but it can’t have any null members
    myField: [String!]
    myField: ["a", null, "b"] # error
    # list itself cannot be null, but it can contain null values
    myField: [String]!
    myField: null # error
    myField: ["a", null, "b"] # valid
    ```

### Object types and fields
* Object types: the most basic components of a GraphQL schema, represent a kind of object you can fetch from your service, and what fields it has.
  ```graphql
  type Character {
    name: String!
    appearsIn: [Episode!]!
  }
  ```
* Arguments: Every field on a GraphQL Object type can have zero or more arguments. All arguments are named.
  ```graphql
  type Starship {
    id: ID!
    name: String!
    length(unit: LengthUnit = METER): Float
  }
  ```
* The Query, Mutation, and Subscription types: the root operation types, the same as any other GraphQL Object type, their fields work exactly the same way.
  ```graphql
  type Query {
    droid(id: ID!): Droid
  }
  ```
### Scalar types
* A GraphQL Object type has a name and fields, but at some point, those fields must resolve to some concrete data.
* They represent the leaf values of the query.
* The default Scalar types: Int, Float, String, Boolean, ID
* In most GraphQL service implementations, there is also a way to specify custom Scalar types.

### Enum types
* A special kind of scalar that is restricted to a particular set of allowed values.
  ```graphql
  enum Episode {
    NEWHOPE
    EMPIRE
    JEDI
  }
  ```

### Interface types
* (abstract types) A certain set of fields that a concrete Object type or other Interface type must also include to implement it
  ```graphql
  interface Character {
    id: ID!
    name: String!
    friends: [Character]
    appearsIn: [Episode]!
  }

  type Human implements Character {
    id: ID!
    name: String!
    friends: [Character]
    appearsIn: [Episode]!
    starships: [Starship]
    totalCredits: Int
  }

  type Droid implements Character {
    id: ID!
    name: String!
    friends: [Character]
    appearsIn: [Episode]!
    primaryFunction: String
  }
  ```
* To ask for a field on a specific Object type, you need to use an inline fragment:
  ```graphql
  {
    hero(episode: JEDI) {
      name
      ... on Droid {
        primaryFunction
      }
    }
  }
  ```
* Interface types may also implement other Interface types:
  ```graphql
  interface Node {
    id: ID!
  }
  
  interface Character implements Node {
    id: ID!
    name: String!
    friends: [Character]
    appearsIn: [Episode]!
  }
  ```
### Union types
* (abstract type)Union types share similarities with Interface types, but they cannot define any shared fields among the constituent types.
* Members of a Union type need to be concrete Object types; you can’t define one using Interface types or other Union types as members.
  ```graphql
  union SearchResult = Human | Droid | Starship
  ```

### Input Object types
* This is particularly valuable in the case of mutations, where you might want to pass in a whole object to be created. In SDL, Input Object types look similar to regular Object types, but with the keyword input instead of type:
  ```graphql
  input ReviewInput {
    stars: Int!
    commentary: String
  }
  
  type Mutation {
    createReview(episode: Episode, review: ReviewInput!): Review
  }
  ```
* Input Object types can’t have arguments on their fields.

### Directives
* Modify parts of a GraphQL schema or operation by using an @ character followed by the directive’s name
  ```graphql
  type User {
    fullName: String
    name: String @deprecated(reason: "Use `fullName`.")
  }
  ```
* In addition to GraphQL’s built-in directives, you may define your own custom directives.

## Queries
* Fields: The fields of the query type are the entry points into the GraphQL API.
* Arguments: The arguments of the query type are the parameters that can be passed to the fields of the query type.
## References
* https://graphql.org/learn/
* https://www.apollographql.com/tutorials/
* https://the-guild.dev/graphql/yoga-server/tutorial/basic
* https://roadmap.sh/graphql
