import { schema } from "./schema";
import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";

function main() {
  const yoga = createYoga({ schema });
  const server = createServer(yoga);
  server.listen(4000, () => {
    console.info("Server is running on http://localhost:4000/graphql");
  });
}

main();
