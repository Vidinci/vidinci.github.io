function msg()
{
 alert("Hello, World!");
}

function ChatWidget()
{
  let custom_language_sp = "spanish";
  let custom_language_en = "english";
  (function (g, e, n, es, ys) {
    g['_genesysJs'] = e;
    g[e] = g[e] || function () {
      (g[e].q = g[e].q || []).push(arguments)
    };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
  })(window, 'Genesys', 'https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js', {
    environment: 'use1',
    deploymentId: 'c31c2cb5-8b72-4881-a716-34df3a626904'
  })
  Genesys("command","Database.update", {
    messaging: {
     customAttributes: {
      browser_language:window.navigator.language,
      customer_language:custom_language_sp
     }
    } 
  });
}
