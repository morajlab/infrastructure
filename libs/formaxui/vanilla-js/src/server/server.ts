import type { IServerProps } from "./server.types.ts";

export class Server {
  private server;

  constructor(props?: IServerProps) {
    this.server = Deno.listen({ port: props?.port ?? 8080 });

    console.log(
      `HTTP webserver running.  Access it at:  http://localhost:8080/`,
    );
  }

  serveHttp = async (conn: Deno.Conn) => {
    const httpConn = Deno.serveHttp(conn);

    for await (const requestEvent of httpConn) {
      const body = "<div>This is for test</div>";

      requestEvent.respondWith(
        new Response(body, {
          status: 200,
        }),
      );
    }
  };

  run = async () => {
    for await (const conn of this.server) {
      this.serveHttp(conn);
    }
  };
}

export default Server;
