function convertToUppercase() {
    // Get the text from the "getOriginalText" textarea
    let originalText = document.getElementById("getOriginalText").value;

    // Convert the text to uppercase
    let convertedText = originalText.toUpperCase();
  
    // Set the value of the "getConvertedText" textarea to the converted text
    document.getElementById("getConvertedText").value = convertedText;
}

function convertToLowercase() {
    // Get the text from the "getOriginalText" textarea
    let originalText = document.getElementById("getOriginalText").value;

    // Convert the text to uppercase
    let convertedText = originalText.toLowerCase();
  
    // Set the value of the "getConvertedText" textarea to the converted text
    document.getElementById("getConvertedText").value = convertedText;
}

function toSentenceCase() {
    // Get the textarea element with the id "getOriginalText"
    let textarea = document.getElementById("getOriginalText");
  
    // Get the text in the textarea
    let text = textarea.value;
  
    // Split the text into an array of sentences
    let sentences = text.split(/[.!?]/g);
  
    // Loop through the array of sentences
    for (let i = 0; i < sentences.length; i++) {
      // Get the current sentence
      let sentence = sentences[i];
  
      // Convert the sentence to lowercase
      sentence = sentence.toLowerCase();
  
      // Convert the first character to uppercase
      sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  
      // Update the sentence in the array
      sentences[i] = sentence;
    }
  
    // Join the sentences back into a single string
    text = sentences.join('. ');
  
    // Get the textarea element with the id "getConvertedText"
    let convertedTextarea = document.getElementById("getConvertedText");
  
    // Update the text in the textarea
    convertedTextarea.value = text;
}

function toCapitalized() {
    // Get the textarea element with the id "getOriginalText"
    let textarea = document.getElementById("getOriginalText");
  
    // Get the text in the textarea
    let text = textarea.value;
  
    // Split the text into an array of words
    let words = text.split(' ');
  
    // Loop through the array of words
    for (let i = 0; i < words.length; i++) {
      // Get the current word
      let word = words[i];
  
      // Convert the first character to uppercase
      word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  
      // Update the word in the array
      words[i] = word;
    }
  
    // Join the words back into a single string
    text = words.join(' ');
  
    // Get the textarea element with the id "getConvertedText"
    let convertedTextarea = document.getElementById("getConvertedText");
  
    // Update the text in the textarea
    convertedTextarea.value = text;
}
  
function copyText() {
    // Get the textarea element
    let textarea = document.getElementById("getConvertedText");
  
    // Select the text inside the textarea
    textarea.select();
  
    // Copy the text
    document.execCommand("copy");
}


  
document.getElementById("copyButton").addEventListener("click", copyText);
document.getElementById("upper").addEventListener("click", convertToUppercase);
document.getElementById("lower").addEventListener("click", convertToLowercase);
document.getElementById("sentence").addEventListener("click", toSentenceCase);
document.getElementById("capitalized").addEventListener("click", toCapitalized);


