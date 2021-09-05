import { Application } from 'https://deno.land/x/abc@v1.3.3/mod.ts';
import { renderFile } from 'https://deno.land/x/abc@v1.3.3/vendor/https/deno.land/x/dejs/mod.ts';
import { Console } from '../log/log.ts';
import type { IServerProps } from './server.types.ts';

export class Server {
  public server;
  private props: IServerProps;

  constructor(props?: IServerProps) {
    this.server = new Application();

    this.server.renderer = {
      render<T>(name: string, data: T): Promise<Deno.Reader> {
        return renderFile(name, data);
      },
    };

    this.props = {
      port: props && props?.port ? props.port : 8080,
    };
  }

  start = () => {
    this.server.start({ port: this.props.port as number });

    Console.log(`Server listening on http://localhost:${this.props.port}`);
  };
}

export default Server;
