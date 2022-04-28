import { Server, Socket } from "socket.io";
import globalSocket from "~/socket/global.socket";

class socket {
  io!: Socket;
  serverInstance!: Server;
  events = [];

  constructor(serverInstance: Server) {
    this.serverInstance = serverInstance;
    serverInstance.on("connection", (io: Socket) => {
      globalSocket(io, serverInstance);
      this.io = io;
      console.log(io.id);
    });
  }
}

export default socket;
