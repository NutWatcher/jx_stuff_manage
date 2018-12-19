const chokidar = require('chokidar');
const shelljs = require('shelljs');
shelljs.exec("apidoc -i api/src -o api/doc");
chokidar.watch('./api/src').on('all', (event, path) => {
  console.log(event, path);
  if (event === "change"){
    shelljs.exec("apidoc -i api/src -o api/doc");
  }
});