const importantElements = document.querySelectorAll(".important");
const images = document.querySelectorAll("img");
const paragraphs = document.querySelectorAll("p");

for (let element of importantElements) {
  element.setAttribute("title", "This is an important item");
}

for (let image of images) {
  if (!image.classList.contains("important")) {
    image.style.display = "none";
  }
}

for (let paragraph of paragraphs) {
  if (paragraph.classList.length > 0) {
    console.log(
      `Content: ${paragraph.textContent} | Class: ${paragraph.classList}`
    );
  } else {
    console.log(`Content: ${paragraph.textContent}`);
    paragraph.style.color = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`;
  }
}
