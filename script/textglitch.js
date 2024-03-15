let glitchedClassName = "glitched"
let glitchedElements = document.getElementsByClassName(glitchedClassName);

let textAttr  = "data-glitch-text";
let minAttr   = "data-glitch-min";
let maxAttr   = "data-glitch-max";
let charsAttr = "data-glitch-chars";
let timeAttr  = "data-glitch-time";

function setToOriginal(element) {
    element.textContent = element.getAttribute(textAttr);
    let min = parseInt(element.getAttribute(minAttr));
    let max = parseInt(element.getAttribute(maxAttr));
    setTimeout(setToGlitched, Math.floor(Math.random() * (max - min + 1) + min), element);
}

function setToGlitched(element) {
    let replacedIndex = Math.floor(Math.random()*element.textContent.length);

    let possibleCharacters = element.getAttribute(charsAttr);
    let glitchTime = parseInt(element.getAttribute(timeAttr));

    let randomChar = possibleCharacters.charAt(Math.floor(Math.random()*possibleCharacters.length));
    element.textContent = setCharAt(element.textContent, replacedIndex, randomChar);
    setTimeout(setToOriginal, glitchTime, element);
}

function setCharAt(str,index,chr) {
    if(index > str.length-1)
        return str;
    
    return str.substring(0,index) + chr + str.substring(index+1);
}

for (let i = 0; i < glitchedElements.length; i++) {
    setToOriginal(glitchedElements[i]);
}
