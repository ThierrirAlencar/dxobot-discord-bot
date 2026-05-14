// Source - https://stackoverflow.com/a/74512399
// Posted by Shahrad Elahi, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-13, License - CC BY-SA 4.0

import { createConnection } from 'node:net';

/**
 * Ping a given host and resolve with the response time in milliseconds,
 * or -1 if there was an error.
 */
export async function Ping(hostname:string, port:number = 80, timeout:number = 3000) {
  return new Promise((resolve) => {
    const start = performance.now();
    const socket = createConnection(port, hostname);
    socket.setTimeout(timeout);
    socket.on('connect', () => {
      const end = performance.now();
      socket.end();
      resolve(end - start);
    });

    function handleError() {
      socket.destroy();
      resolve(-1);
    }

    socket.on('timeout', handleError);
    socket.on('error', handleError);
  });
}

//console.log(await ping('stackoverflow.com'));

