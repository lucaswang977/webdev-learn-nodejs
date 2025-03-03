# Notes on Nestjs Official Document

## Overview

- To create a Nest application instance, we use the core NestFactory class. NestFactory exposes a few static methods that allow creating an application instance.
- The create() method returns an application object, which fulfills the INestApplication interface.
- When you pass a type to the NestFactory.create() method, the app object will have methods available exclusively for that specific platform. (NestExpressApplication and NestFastifyApplication)

## Concepts

- Controllers
  - Controllers are responsible for handling incoming requests and sending responses back to the client.
  - We use the @Controller() decorator to define a basic controller. Using a path prefix in the @Controller() decorator helps us group related routes together and reduces repetitive code.
- Providers
- Modules
