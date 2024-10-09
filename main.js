const svgContainer = document.querySelector("#svg-container");

// Create the SVG namespace
const svgNS = "http://www.w3.org/2000/svg";

const svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("width", "1000");
svg.setAttribute("height", "1000");
svg.setAttribute("viewBox", "0 0 1000 1000");

const rect = document.createElementNS(svgNS, "rect");
rect.setAttribute("width", "100");
rect.setAttribute("height", "100");
rect.setAttribute("x", "0");
rect.setAttribute("y", "0");
rect.setAttribute("fill", "red");

svg.appendChild(rect);

svgContainer.appendChild(svg);
