# Fastify on Deno

Example [Fastify](https://fastify.dev/) app running on [Deno](https://deno.com/). Fastify is a fast, low-overhead web framework for Node.js. Deno is a secure JavaScript and TypeScript runtime with built-in tooling and Node.js compatibility.

## Deploy settings

| Field | Value |
| --- | --- |
| Build | Railpack |
| Project directory | `/` |
| Install command | leave empty |
| Build command | leave empty |
| Start command | `deno task start` |
| Application port | `3000` |
| Health check path | `/` |

## <a name="dev"></a>Run locally

```bash
# start the app
deno task start
```
