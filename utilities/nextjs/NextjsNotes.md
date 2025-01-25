# Nextjs Document Notes

## Routing

- Layouts and pages
  - Folders are used to define the route segments that map to URL segments.
  - Files (like page and layout) are used to create UI that is shown for a segment.
  - Nested route
  - Nesting layout: By default, layouts in the folder hierarchy are also nested, which means they wrap child layouts via their children prop.
  - You can use the \<Link> component to navigate between routes.
- Linking and navigating
  - There are four ways to navigate between routes in Next.js:
    - Link component (provide prefetching and client-side navigation between routes)
    - useRouter hook (programmatically change routes from Client Components)
    - redirect function (use the redirect function for Server Component)
    - native History API (use the native _window.history.pushState_ and _window.history.replaceState_ methods to update the browser's history stack without reloading the page)
  - How Routing and Navigation Works
    - Code Splitting
    - Prefetching
    - Caching
    - Partial Rendering
    - Soft Navigation
    - Back and Forward Navigation
    - Routing between pages/ and app/
- Dynamic routes
  - [folderName]
  - generateStaticParams
  - catch-all segments: [...folderName]
  - optional catch-all segments: [[...folderName]]
- Route groups
  - (folderName)
  - Organize routes without affecting the URL path
  - Opting specific segments into a layout
  - Opting for loading skeletons on a specific route
  - Creating multiple root layouts
- Route Handlers
  - Route Handlers are defined in a route.js|ts file inside the app directory.
  - Route Handlers are not cached by default. (export const dynamic = 'force-static')
  - In addition to supporting the native Request and Response APIs, Next.js extends them with NextRequest and NextResponse to provide convenient helpers for advanced use cases.
- Parallel Routes
  - Parallel routes are created using named slots. Slots are defined with the @folder convention.
- Error handling
  - error boundaries
- Redirecting
- Middleware
- Internationalization

## Data Fetching

- Data Fetching and Caching
  - Fetching data on the server with the fetch API
  - Fetching data on the server with an ORM or database
  - Fetching data on the client
  - Caching data with an ORM or Database (unstable_cache)
  - Reusing data across multiple functions
  - Patterns
    - Parallel and sequential data fetching
    - Preloading Data
    - Preventing sensitive data from being exposed to the client
- Server Actions and Mutations
- Incremental Static Regeneration (ISR)

## Rendering

- Server Components
  - Static Rendering (Default)
  - Dynamic Rendering
  - Streaming
- Client Components
- Server and Client Composition Patterns
- Partial Prerendering
- Runtimes
