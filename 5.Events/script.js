const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  let wrapper = document.getElementsByClassName("displayedsquare-wrapper")[0]; // body element
  let newDiv = document.createElement("div");
  newDiv.classList.add("displayedsquare")
  newDiv.classList.add(e.target.classList[1])
  // append to body
  wrapper.appendChild(newDiv);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

// https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color