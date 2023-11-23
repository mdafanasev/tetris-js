import "./style.css";

const CELL_SIZE = 40;
const WIDTH = 10;
const HEIGHT = 20;

const COLOR_1 ="#f5e0dc";
const COLOR_2 ="#cba6f7";
const COLOR_3 ="#f38ba8";
const COLOR_4 ="#fab387";
const COLOR_5 ="#a6e3a1";
const COLOR_6 ="#74c7ec";
const COLOR_7 ="#b4befe";

function fillCell(ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void {
  ctx.fillStyle = color;
  ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

function renderI(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  fillCell(ctx, COLOR_1, x, y);
  fillCell(ctx, COLOR_1, x, y + 1);
  fillCell(ctx, COLOR_1, x, y + 2);
  fillCell(ctx, COLOR_1, x, y + 3);
}

function renderO(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  fillCell(ctx, COLOR_2, x, y);
  fillCell(ctx, COLOR_2, x, y + 1);
  fillCell(ctx, COLOR_2, x + 1, y);
  fillCell(ctx, COLOR_2, x + 1, y + 1);
}

function renderT(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  fillCell(ctx, COLOR_3, x + 1, y);
  fillCell(ctx, COLOR_3, x, y + 1);
  fillCell(ctx, COLOR_3, x + 1, y + 1);
  fillCell(ctx, COLOR_3, x + 2, y + 1);
}

function renderJ(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  fillCell(ctx, COLOR_4, x + 1, y);
  fillCell(ctx, COLOR_4, x + 1, y + 1);
  fillCell(ctx, COLOR_4, x + 1, y + 2);
  fillCell(ctx, COLOR_4, x, y + 2);
}

function renderL(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  fillCell(ctx, COLOR_5, x, y);
  fillCell(ctx, COLOR_5, x, y + 1);
  fillCell(ctx, COLOR_5, x, y + 2);
  fillCell(ctx, COLOR_5, x + 1, y + 2);
}

function renderS(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  fillCell(ctx, COLOR_6, x, y + 1);
  fillCell(ctx, COLOR_6, x + 1, y + 1);
  fillCell(ctx, COLOR_6, x + 1, y);
  fillCell(ctx, COLOR_6, x + 2, y);
}

function renderZ(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  fillCell(ctx, COLOR_7, x, y);
  fillCell(ctx, COLOR_7, x + 1, y);
  fillCell(ctx, COLOR_7, x + 1, y + 1);
  fillCell(ctx, COLOR_7, x + 2, y + 1);
}

async function main(appRoot: Element) {
  console.log("App initialization...");
  const canvasElement = document.createElement("canvas");
  appRoot.appendChild(canvasElement);

  const setupCanvasSize = () => {
    canvasElement.width = WIDTH * CELL_SIZE;
    canvasElement.height = HEIGHT * CELL_SIZE;
  };
  setupCanvasSize();
  await Promise.resolve();

  const ctx = canvasElement.getContext("2d");
  if (!ctx) {
    throw new Error("Creating canvas context failed");
  }

  renderI(ctx, 1, 1);
  renderO(ctx, 3, 2);
  renderT(ctx, 6, 4);
  renderL(ctx, 2, 7);
  renderJ(ctx, 6, 8);
  renderS(ctx, 1, 12);
  renderZ(ctx, 6, 13);
}

const appRoot = document.querySelector("#app");
if (appRoot) {
  main(appRoot);
} else {
  throw new Error("App root not found");
}
