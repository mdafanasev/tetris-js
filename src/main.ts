import './style.css';

function main(appRoot: Element):void {
  console.log("App initialization...")
}

const appRoot = document.querySelector("#app");
if (appRoot) {
  main(appRoot);
} else {
  throw new Error("App root not found");
}