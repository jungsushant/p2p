import { createServer, Server as HttpServer } from "node:http";
import next from "next";
import { Server as SocketIOServer } from "socket.io";
import { Socket } from "socket.io";

const dev: boolean = process.env.NODE_ENV !== "production";
const hostname: string = "localhost";
const port: number = 3000;

// Type for Next.js app configuration
interface NextConfig {
  dev: boolean;
  hostname: string;
  port: number;
}

// Initialize Next.js app with typed configuration
const app = next({ dev, hostname, port } as NextConfig);
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer: HttpServer = createServer(handler);
  const io: SocketIOServer = new SocketIOServer(httpServer);

  io.on("connection", (socket: Socket) => {
    // WebSocket connection handling goes here
    // Example:
    // socket.on("message", (data: any) => {
    //   console.log("Received:", data);
    // });
  });

  httpServer
    .once("error", (err: Error) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
