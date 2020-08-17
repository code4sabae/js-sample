/*
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler
*/

const proxySelect = (sel, ar) => {
  while (sel.firstChild) {
    sel.removeChild(sel.firstChild);
  }
  const cr = (c) => {
    const opt = document.createElement("option");
    opt.textContent = c.toString();
    // opt.value = c;
    return opt;
  }
  for (const c of ar) {
    const opt = cr(c);
    sel.appendChild(opt);
  }
  return new Proxy(ar, {
    set(obj, prop, val) {
      // console.log(obj, prop, val);
      if (prop === "length") {
        const removelen = sel.children.length - val;
        console.log(removelen, val);
        for (let i = 0; i < removelen; i++) {
          sel.removeChild(sel.children[val]);
        }
        return Reflect.set(...arguments);
      }
      const n = parseInt(prop);
      for (let i = sel.children.length; i <= n; i++) {
        const opt = cr("");
        sel.appendChild(opt);
      }
      const t = sel.children[n];
      t.textContent = val.toString();
      // t.value = val;
      return Reflect.set(...arguments);
    }
  });
};

export { proxySelect };
