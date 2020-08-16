import { Server } from "https://code4sabae.github.io/js/Server.js";
// import { Server } from "http://127.0.0.1:8080/Server.js";

class MyServer extends Server {
  api(path, req) {
    const res = {
      path,
      req,
      time: new Date(),
    };
    this.push(res);
    return null;
  }

  // WebSocket API
  onmessage(sockid, req) { // to override
    const mes = req.text;
    if (req.dm) {
      this.send(req.dm, mes);
    } else {
      this.push(sockid, req); // push req
    }
    return null; // reply to sender
  }

  onopen(sockid) { // to override
    super.onopen(sockid);
  }

  onclose(sockid) { // to override
    super.onclose(sockid);
  }
}
new MyServer(8881);
