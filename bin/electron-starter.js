const path = require("path");
const { existsSync, readFileSync, unlinkSync, watchFile} = require("fs");
const { spawn } = require("child_process");

main();

function main(){
  const mainFilePath = getMainFilePath();
  clearFile(mainFilePath);
  watchMainFile(mainFilePath);
  buildMain();
}

function buildMain(){
  spawn("yarn", ["watch-main"],{
    shell: true,
    env: process.env,
    stdio: "inherit"
  })
  .on("error", spawnError => console.error(spawnError))
}

function clearFile(filePath){
  if(existsSync(filePath)){
    unlinkSync(filePath)
  }
}

function getMainFilePath(){
  const packageJson = JSON.parse(
    readFileSync(path.resolve(__dirname, "../package.json"))
  );
  return path.resolve(__dirname, "..", packageJson.main);
}

function startElectron(){
  return spawn("yarn", ["start-electron"], {
    shell: true,
    env: process.env,
    stdio: "inherit"
  })
  .on("error", spawnError => console.error(spawnError));
}

function watchMainFile(mainFilePath){
  let mainProcess = null;
  watchFile(mainFilePath, () => {
    if(existsSync(mainFilePath)){
      mainProcess.kill();
      mainProcess = null;
    }
    mainProcess = startElectron();
  })
}
