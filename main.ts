import Fastify from "npm:fastify@4";

const fastify = Fastify();

fastify.get("/", async () => {
  return "Hello world";
});

const port = Number(Deno.env.get("PORT")) || 3000;

await fastify.listen({ port, host: "0.0.0.0" });
console.log(`Server running on http://localhost:${port}`);
