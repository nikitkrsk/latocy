//copy to clipboard function
const copyDivToClipboard = () => {
  var range = document.createRange();
  range.selectNode(document.getElementById("fieldWithResult"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect
}
//checking with selecting text
const checkWordWithCopy = word => {
  let letter;
  chrome.tabs.executeScript(
    { code: "window.getSelection().toString();" },
    selection => {
      letter = selection[0];
      document.getElementById("fieldWithResult").innerHTML = RunScript(letter);
    }
  );
  let final = [];
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (JSON.parse(xhr.response).def.length === 0) {
        letter.split("").forEach(el => final.push(RunScript(el)));
      }
    }
    let input = document.getElementById("fieldWithResult2");
    //checking duplicates
    let originalText = document.getElementById("fieldWithResult").innerHTML
    if (originalText != final.join("")){    
      input.innerHTML = final.join("");
    }
    if (final.join("").length > 0) {
      navigator.clipboard.writeText(final.join(""));
      document.getElementById("fieldWithResultCopy").innerHTML = final.join("") + 
        " Copied to Clipboard";
    }
    if (input.innerHTML != ""){
      document.getElementById("fieldWithResultDescr").innerHTML = "other option:";
    }else{
      document.getElementById("fieldWithResultDescr").innerHTML = "";
    }
    
  };
  xhr.open(
    "GET",
    "https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20190806T144714Z.42c689a334e04cc1.d165ba9e4718e173c9410870dabb6f853419e6ec&lang=ru-ru&text=" +
      letter,
    true
  );
  xhr.send(null);
};
//checking inside extension
const checkWord = word => {
  let letter = document.getElementById("textIN").value;
  let final = [];
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (JSON.parse(xhr.response).def.length === 0) {
        letter.split("").forEach(el => final.push(RunScript(el)));
      }
    }

    let originalText = document.getElementById("fieldWithResult").innerHTML
    if (originalText != final.join("")){    
      document.getElementById("fieldWithResult1").innerHTML = final.join("");
     
    }
    if (document.getElementById("fieldWithResult1").innerHTML != ""){
      document.getElementById("fieldWithResultDescr").innerHTML = "other option:";
    }else{
      document.getElementById("fieldWithResultDescr").innerHTML = "";
    }
    
  };
  let wordArray = [];
  wordArray = word.split(" ");
  wordArray.forEach(el => {
    xhr.open(
      "GET",
      "https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20190806T144714Z.42c689a334e04cc1.d165ba9e4718e173c9410870dabb6f853419e6ec&lang=ru-ru&text=" +
        el,
      true
    );
  });
  xhr.send(null);
};
//function to check word
const RunScript = letter => {
  letter = letter.replace(/[hx]/g, "х");
  letter = letter.replace(/a/g, "а");
  letter = letter.replace(/b/g, "б");
  letter = letter.replace(/v/g, "в");
  letter = letter.replace(/w/g, "в");
  letter = letter.replace(/g/g, "г");
  letter = letter.replace(/d/g, "д");
  letter = letter.replace(/e/g, "е");
  letter = letter.replace(/[ëé]/g, "ё");
  letter = letter.replace(/z/g, "з");
  letter = letter.replace(/ž/g, "ж");
  letter = letter.replace(/зх/g, "ж");
  letter = letter.replace(/i/g, "и");
  letter = letter.replace(/j/g, "й");
  letter = letter.replace(/k/g, "к");
  letter = letter.replace(/l/g, "л");
  letter = letter.replace(/m/g, "м");
  letter = letter.replace(/n/g, "н");
  letter = letter.replace(/o/g, "о");
  letter = letter.replace(/p/g, "п");
  letter = letter.replace(/r/g, "р");
  letter = letter.replace(/s/g, "с");
  letter = letter.replace(/t/g, "т");
  letter = letter.replace(/u/g, "у");
  letter = letter.replace(/f/g, "ф");
  letter = letter.replace(/c/g, "ц");
  letter = letter.replace(/č/g, "ч");
  letter = letter.replace(/цх/g, "ч");
  letter = letter.replace(/š/g, "ш");
  letter = letter.replace(/сх/g, "ш");
  letter = letter.replace(/ŝ/g, "щ");
  letter = letter.replace(/шч/g, "щ");
  letter = letter.replace(/y/g, "ы");
  letter = letter.replace(/[``]/g, "э");
  letter = letter.replace(/йу/g, "ю");
  letter = letter.replace(/йа/g, "я");
  letter = letter.replace(/û/g, "ю");
  letter = letter.replace(/â/g, "я");
  letter = letter.replace(/q/g, "я");
  letter = letter.replace(/’/g, "ь"); 
  letter = letter.replace(/'/g, "ь"); 
  letter = letter.replace(/ʹ/g, "ь");
  letter = letter.replace(/ʺ/g, "ъ");
  letter = letter.replace(/ьь/g, "ъ");

  letter = letter.replace(/[HX]/g, "Х");
  letter = letter.replace(/A/g, "А");
  letter = letter.replace(/B/g, "Б");
  letter = letter.replace(/V/g, "В");
  letter = letter.replace(/W/g, "В");
  letter = letter.replace(/G/g, "Г");
  letter = letter.replace(/D/g, "Д");
  letter = letter.replace(/E/g, "Е");
  letter = letter.replace(/Ë/g, "Ё");
  letter = letter.replace(/Z/g, "З");
  letter = letter.replace(/Ž/g, "Ж");
  letter = letter.replace(/ЗХ/g, "Ж");
  letter = letter.replace(/Зх/g, "Ж");
  letter = letter.replace(/I/g, "И");
  letter = letter.replace(/J/g, "Й");
  letter = letter.replace(/K/g, "К");
  letter = letter.replace(/L/g, "Л");
  letter = letter.replace(/M/g, "М");
  letter = letter.replace(/N/g, "Н");
  letter = letter.replace(/O/g, "О");
  letter = letter.replace(/P/g, "П");
  letter = letter.replace(/R/g, "Р");
  letter = letter.replace(/S/g, "С");
  letter = letter.replace(/T/g, "Т");
  letter = letter.replace(/U/g, "У");
  letter = letter.replace(/F/g, "Ф");
  letter = letter.replace(/C/g, "Ц");
  letter = letter.replace(/Č/g, "Ч");
  letter = letter.replace(/ЦХ/g, "Ч");
  letter = letter.replace(/Цх/g, "Ч");
  letter = letter.replace(/Š/g, "Ш");
  letter = letter.replace(/СХ/g, "Ш");
  letter = letter.replace(/Сх/g, "Ш");
  letter = letter.replace(/Š/g, "Щ");
  letter = letter.replace(/ШЧ/g, "Щ");
  letter = letter.replace(/Шч/g, "Щ");
  letter = letter.replace(/Y/g, "Ы");
  letter = letter.replace(/[~]/g, "Э");
  letter = letter.replace(/ЙУ/g, "Ю");
  letter = letter.replace(/ЙА/g, "Я");
  letter = letter.replace(/Q/g, "Я");
  letter = letter.replace(/Йу/g, "Ю");
  letter = letter.replace(/Йа/g, "Я");
  letter = letter.replace(/Û/g, "Ю");
  letter = letter.replace(/Â/g, "Я");
  return letter;
}
//display text inside extension
const eventHandler = () => {
  input = document.getElementById("fieldWithResult2").innerHTML = "";
  str = document.getElementById("textIN").value;
  if (str.includes("pidor")) {
    document.getElementById("fieldWithResult").innerHTML = "сам ты пидор";
  } else {
    var updetedText = (document.getElementById(
      "fieldWithResult"
    ).innerHTML = RunScript(str));
    checkWord(RunScript(str)); 
  }
  copyDivToClipboard();
  document.getElementById("fieldWithResultCopy").innerHTML =
    updetedText + " Copied to Clipboard";
};
//event listener on click or eneter
window.addEventListener("load", function load(event) {
  var runButton = document.getElementById("runButton");
  var OnEnter = document.getElementById("textIN");
  OnEnter.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
      eventHandler();
    }
  });
  runButton.addEventListener("click", eventHandler);
});
//event listener on selecting text
window.addEventListener("load", function load(event) {
  far = window.getSelection().toString();
  checkWordWithCopy(RunScript(far));
});
//show info
window.addEventListener("load", function load(event) {
  var runButton = document.getElementById("ABC");
  runButton.addEventListener("click", function(e) {
    var showHide = document.getElementById("ABCD");
    if (showHide.style.display === "none") {
      showHide.style.display = "grid";
    } else {
      showHide.style.display = "none";
    }
  });
});

console.log("just to lazy to install phonetic library");
