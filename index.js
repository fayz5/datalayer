const cluster = require('cluster');
const dgram = require('dgram');
const util = require('util');
const cpuCount = require('os').cpus().length;


if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < 2; i++) {
      const worker = cluster.fork();

      // console.log(util.inspect(worker));
  }

  cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died\n It exited with code ${code} and signal ${signal}\n\n`);
      cluster.fork();
  });


} else {
  const server = dgram.createSocket({
    type: 'udp4'
  });

  server.on('listening', () => {
    const address = server.address();
    console.log(`Worker ${process.pid} is listening on ${address.address}:${address.port}`);
  });

  server.on('message', (msg, rinfo) => {
    console.log(`${msg} received on process ${process.pid}`);
  });

  server.bind({
    port: 41234
  });

  console.log(`Worker ${process.pid} started`);
}
