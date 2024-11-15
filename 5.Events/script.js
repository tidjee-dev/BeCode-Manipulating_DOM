const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  // console.log(e.target.classList[1]);
  // console.log(getElapsedTime());
  let wrapper = document.getElementsByClassName("displayedsquare-wrapper")[0]; // body element
  let newDiv = document.createElement("div");
  newDiv.classList.add("displayedsquare");
  newDiv.classList.add(e.target.classList[1]);
  // append to body
  wrapper.appendChild(newDiv);

  createLog(`Action: ${e.target.classList[1]} | Time: ${getElapsedTime()}`);
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

// https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color

const isDarkColor = (color) => {
  const [r, g, b] = color.match(/\d+/g).map(Number);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
};

const getTextColor = (bgColor) => {
  return isDarkColor(bgColor) ? "white" : "black";
};

const changeBodyColor = (e) => {
  document.body.style.backgroundColor = randomColor();

  document.body.style.color = getTextColor(document.body.style.backgroundColor);

  createLog(
    `Spacebar pressed at ${getElapsedTime()} | Background color: ${
      document.body.style.backgroundColor
    }`
  );
};

const log = document.querySelector("ul");
const createLog = (message) => {
  let newLog = document.createElement("li");
  newLog.innerHTML = message;
  log.appendChild(newLog);
};

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const pressSpace = (e) => {
  if (e.key === " ") {
    changeBodyColor();
  }
};

const pressL = (e) => {
  if (e.key === "l") {
    let logs = document.querySelectorAll("li");
    if (logs.length > 0) {
      for (let log of logs) {
        log.remove();
      }
      createLog(`Log successfully cleared at ${getElapsedTime()}`);
    } else {
      createLog(`Log is already empty at ${getElapsedTime()}`);
    }
  }
};

const pressS = (e) => {
  if (e.key === "s") {
    let squares = document.querySelectorAll(".displayedsquare");
    if (squares.length > 0) {
      for (let square of squares) {
        square.remove();
      }
      createLog(`Squares successfully cleared at ${getElapsedTime()}`);
    } else {
      createLog(`No squares to clear at ${getElapsedTime()}`);
    }
  }
};

// Event listeners
addEventListener("keydown", pressSpace);
addEventListener("keydown", pressL);
addEventListener("keydown", pressS);
