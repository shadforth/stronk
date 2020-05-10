const elements = [...document.body.getElementsByTagName("*")];

const findAndReplace = (elements) => {
  elements.forEach((element) => {
    element.childNodes.forEach((child) => {
      if (child.nodeType === 3) {
        replaceText(child);
      }
    });
  });
};

const replaceText = (node) => {
  let value = node.nodeValue;
  value = value.replace(/STRONG/g, "STRONK");
  value = value.replace(/STRONGER/g, "STRONKER");
  value = value.replace(/STRONGEST/g, "STRONKEST");
  value = value.replace(/Strong/g, "Stronk");
  value = value.replace(/Stronger/g, "Stronker");
  value = value.replace(/Strongest/g, "Stronkest");
  value = value.replace(/strong/g, "stronk");
  value = value.replace(/stronger/g, "stronker");
  value = value.replace(/strongest/g, "stronkest");
  node.nodeValue = value;
};

findAndReplace(elements);
