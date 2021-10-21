import { copy } from "https://deno.land/std@0.112.0/io/util.ts";

const hostname = "localhost";
const port = 8080;

const listener = Deno.listen({ hostname, port });
console.log(`Listening on ${hostname}:${port}`);

for await (const conn of listener) {
	copy(conn, Deno.stdout);
}