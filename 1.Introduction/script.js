let docTitle = document.title;
let body = document.body;

console.log(`Title of the document: ${docTitle}`);

docTitle = "Modifying the DOM";
console.log(`Modifying ...`);
document.title = docTitle;
console.log(`Modified title of the document: ${docTitle}`);

body.style.backgroundColor = "#FF69B4";
console.log(`Background color of the body: ${body.style.backgroundColor}`);

body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(
  16
)}`;
console.log(`Background color of the body: ${body.style.backgroundColor}`);

for (let child of body.children[1].children) {
  console.log(child);
}
