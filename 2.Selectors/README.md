# DOM Selectors

You can access any elements from the DOM using the `querySelector` and `querySelectorAll` methods.

- `querySelector` returns the first element that matches the selector
- `querySelectorAll` returns a list of elements that matches the selector

## Examples 

```html
<p>
  This is a <a href="homepage.html">link</a>, this is <a href="contact.html" id="bold">another link</a>.
</p>
```

```javascript
const anchor = document.querySelector('a')
console.log(anchor.href) // "homepage.html"
console.log(anchor.innerText) // "link"

const allAnchors = document.querySelectorAll('a')
console.log(allAnchors) // [ ... ]
console.log(allAnchors[0].innerText) // "link"
console.log(allAnchors[1].id) // "bold"
```

Javascript query-selectors works like css selectors, if you want to select any `<a>` tag with the id `bold` just use :
```javascript
const boldAnchor = document.querySelector('a#bold')
console.log(boldAnchor.innerText) // "another link"

```

## Exercises

Without modifying the [index.html](./index.html) file open the [script.js](./script.js) to do the following tasks:
- Add a `title` attribute to every element that has the important class, stating `This is an important item`. Tip: adding a title attribute to an element is different from changing the title of a document.
- Select all the img tags and loop through them. If they have no `important` class, turn their [display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) to `none`
- Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
- Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
