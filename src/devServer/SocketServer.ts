import { FuseBox } from "./../FuseBox";
import { Server } from "ws";


export class SocketServer {

    public static server: SocketServer;

    public static createInstance(server: any, fuse: FuseBox) {
        if (!this.server) {
            this.server = this.start(server, fuse);
        }
        return this.server;
    }

    public static getInstance(): SocketServer {
        return this.server;
    }

    public static start(server: any, fuse: FuseBox) {
        let wss = new Server({ server: server });
        let ss = new SocketServer(wss, fuse);
        return ss;
    }


    public cursor: any;
    public clients = new Set<any>();

    constructor(public server: any, public fuse: FuseBox) {
        server.on("connection", (ws) => {
            this.fuse.context.log.echo("Client connected")
            this.clients.add(ws);

            ws.on("message", message => {
                let input = JSON.parse(message);
                if (input.event) {
                    this.onMessage(ws, input.event, input.data);
                }
            });
            ws.on("close", () => {
                this.fuse.context.log.echo("Connection closed");
                this.clients.delete(ws);
            });
        });
    }


    public send(type: string, data: any) {
        this.clients.forEach(client => {
            client.send(JSON.stringify({ type: type, data: data }));
        });
    }

    protected onMessage(client: any, type: string, data: any) {

    }
}