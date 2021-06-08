const fs = require('fs');
const path = require('path');
const { createBundleRenderer } = require('vue-server-renderer')

const serverBundle = require('./dist-server/vue-ssr-server-bundle.json')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // recommended
  shouldPreload() {
    return false;
  },
  shouldPrefetch() {
    return false;
  },
  template: fs.readFileSync(
    path.resolve(__dirname, "./index.temp.html"),
    "utf-8"
  ), // (optional) page template
  clientManifest: require('./dist-client/vue-ssr-client-manifest.json') // (optional) client build manifest
})

const express = require('express')
const server = express();

server.use("/static/", express.static(path.join(__dirname, "./dist-client/")));

// inside a server handler...
server.get('*', (req, res) => {
  const context = { url: req.url }
  // No need to pass an app here because it is auto-created by
  // executing the bundle. Now our server is decoupled from our Vue app!
  renderer.renderToString(context, (err, html) => {
    // handle error...
    res.end(html)
  })
})

const port = 3000;
server.listen(port, function() {
  console.log(
    `app listening at http://localhost:${port}`
  );
});

