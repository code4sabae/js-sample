// import { ServerSync } from "http://127.0.0.1:8080/ServerSync.js";
// import { sleep } from "http://127.0.0.1:8080/sleep.js";
import { ServerSync } from "https://code4sabae.github.io/js/ServerSync.js";
import { sleep } from "https://code4sabae.github.io/js/sleep.js";

const main = async (ws) => {
  for (;;) {
    const data = await ws.get();
    await sleep(500);
    ws.send({ testsync: data, n: data.ab * 2 });
  }
};

const cport = 8881;
new ServerSync(cport, main);
