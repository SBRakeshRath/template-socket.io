export default function globalSocket(io, sio) {
  io.on("hello", (arg) => {
    console.log(arg);
  });
}
