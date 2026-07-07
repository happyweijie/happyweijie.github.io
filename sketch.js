const W = 480;
const H = 300;
const VALUES = [9, 20, 34, 50, 63, 77, 90];
const STEP_FRAMES = 30;
const FOUND_FRAMES = 90;
const NODE_RADIUS = 18;

const COLORS = {
  background: "#0f172a",
  edge: "#4b5d75",
  node: "#93a9c4",
  nodeText: "#a2b7d0",
  accent: "#7da3c4",
  caption: "#a2b7d0",
};

let nodes = [];
let root;
let target;
let searchPath = [];
let stepFrame = 0;

// build a balanced BST from the sorted values; x = in-order position, y = depth
function buildTree(lo, hi, depth) {
  if (lo > hi) return null;
  const mid = floor((lo + hi) / 2);
  const node = {
    value: VALUES[mid],
    x: ((mid + 1) / (VALUES.length + 1)) * W,
    y: 50 + depth * 85,
    left: buildTree(lo, mid - 1, depth + 1),
    right: buildTree(mid + 1, hi, depth + 1),
  };
  nodes.push(node);
  return node;
}

function pathTo(value) {
  const path = [];
  let node = root;
  while (node) {
    path.push(node);
    if (value === node.value) break;
    node = value < node.value ? node.left : node.right;
  }
  return path;
}

function newSearch() {
  target = random(VALUES);
  searchPath = pathTo(target);
  stepFrame = 0;
}

function setup() {
  const canvas = createCanvas(W, H);
  canvas.parent("sketch");

  textFont("Courier New");
  textAlign(CENTER, CENTER);
  strokeCap(ROUND);

  root = buildTree(0, VALUES.length - 1, 0);
  newSearch();
}

function draw() {
  background(COLORS.background);

  // hovering a node shows the search path to it; otherwise run the auto search
  const hovered = nodes.find((n) => dist(mouseX, mouseY, n.x, n.y) < NODE_RADIUS + 4);
  let path, visited, caption;
  if (hovered) {
    path = pathTo(hovered.value);
    visited = path.length;
    caption = `search(${hovered.value})`;
  } else {
    stepFrame++;
    path = searchPath;
    visited = min(floor(stepFrame / STEP_FRAMES) + 1, path.length);
    caption = `search(${target})`;
    if (stepFrame > path.length * STEP_FRAMES + FOUND_FRAMES) newSearch();
  }
  const found = visited === path.length;

  // edges
  for (const node of nodes) {
    for (const child of [node.left, node.right]) {
      if (!child) continue;
      const onPath = path.indexOf(node) >= 0 && path.indexOf(child) === path.indexOf(node) + 1;
      const lit = onPath && path.indexOf(child) < visited;
      stroke(lit ? COLORS.accent : COLORS.edge);
      strokeWeight(lit ? 2.5 : 1.5);
      line(node.x, node.y, child.x, child.y);
    }
  }

  // nodes
  for (const node of nodes) {
    const idx = path.indexOf(node);
    const lit = idx >= 0 && idx < visited;
    const isTarget = lit && idx === path.length - 1 && found;

    if (isTarget) {
      // found: soft pulsing halo
      const pulse = 1 + 0.15 * sin(frameCount * 0.15);
      noFill();
      stroke(COLORS.accent);
      strokeWeight(1);
      circle(node.x, node.y, (NODE_RADIUS * 2 + 8) * pulse);
    }

    fill(COLORS.background);
    stroke(lit ? COLORS.accent : COLORS.node);
    strokeWeight(lit ? 2.5 : 1.5);
    circle(node.x, node.y, NODE_RADIUS * 2);

    noStroke();
    fill(lit ? COLORS.accent : COLORS.nodeText);
    textSize(12);
    text(node.value, node.x, node.y);
  }

  noStroke();
  fill(COLORS.caption);
  textSize(13);
  textAlign(LEFT, BOTTOM);
  text(found ? `${caption} ✓` : caption, 10, height - 8);
  textAlign(CENTER, CENTER);
}
