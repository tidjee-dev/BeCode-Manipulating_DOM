document.addEventListener("DOMContentLoaded", function () {
  const lastChild = document.querySelector("ol").lastElementChild;
  const secondSection = document.querySelector("section:nth-child(2)");
  const thirdSection = document.querySelector("section:nth-child(3)");

  document.querySelector("ol").prepend(lastChild);

  const thirdH2 = thirdSection.querySelector("h2");
  const secondH2 = secondSection.querySelector("h2");

  secondSection.prepend(thirdH2);
  thirdSection.prepend(secondH2);

  secondSection.remove();
});
