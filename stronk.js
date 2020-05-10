const elements = document.querySelectorAll(
  "h1, h2, h3, h4, h5, h6, p, li, td, caption, span"
);

const findAndReplace = (elements) => {
  elements.forEach((element) => {
    replaceText(element);
  });
};

const replaceText = (text) => {
  if (text.innerHTML.match(/strong/i)) {
    text.innerHTML = text.innerHTML.replace(/STRONG/g, "STRONK");
    text.innerHTML = text.innerHTML.replace(/STRONGER/g, "STRONKER");
    text.innerHTML = text.innerHTML.replace(/STRONGEST/g, "STRONKEST");
    text.innerHTML = text.innerHTML.replace(/Strong/g, "Stronk");
    text.innerHTML = text.innerHTML.replace(/Stronger/g, "Stronker");
    text.innerHTML = text.innerHTML.replace(/Strongest/g, "Stronkest");
    text.innerHTML = text.innerHTML.replace(/strong/g, "stronk");
    text.innerHTML = text.innerHTML.replace(/stronger/g, "stronker");
    text.innerHTML = text.innerHTML.replace(/strongest/g, "stronkest");
  }
};

findAndReplace(elements);
