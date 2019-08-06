function transliterate(word){
    var answer = ""
      , a = {};

   a["YO"]="Ё";a["I"]="Й";a["TS"]="Ц";a["U"]="У";a["K"]="К";a["E"]="Е";a["N"]="Н";a["G"]="Г";a["SH"]="Ш";a["SCH"]="Щ";a["Z"]="З";a["H"]="Х";a["'"]="Ъ";
   a["yo"]="ё";a["i"]="й";a["ts"]="ц";a["u"]="у";a["k"]="к";a["e"]="е";a["n"]="н";a["g"]="г";a["sh"]="ш";a["sch"]="щ";a["z"]="з";a["h"]="х";a["'"]="ъ";
   a["F"]="Ф";a["I"]="Ы";a["V"]="В";a["A"]="А";a["P"]="П";a["R"]="Р";a["O"]="О";a["L"]="Л";a["D"]="Д";a["ZH"]="Ж";a["YE"]="Э";
   a["f"]="ф";a["i"]="ы";a["v"]="в";a["a"]="а";a["p"]="п";a["r"]="р";a["o"]="о";a["l"]="л";a["d"]="д";a["zh"]="ж";a["ye"]="э";
   a["Ya"]="я";a["CH"]="ч";a["S"]="с";a["M"]="м";a["I"]="и";a["T"]="т";a["'"]="ь";a["B"]="б";a["YU"]="ю";
   a["ya"]="я";a["ch"]="ч";a["s"]="с";a["m"]="м";a["i"]="и";a["t"]="т";a["'"]="ь";a["b"]="б";a["yu"]="ю";

   for (i in word){
     if (word.hasOwnProperty(i)) {
       if (a[word[i]] === undefined){
         answer += word[i]
       } else {
         answer += a[word[i]]
       }
     }
   }
   return answer;
}
function copyDivToClipboard() {
  var range = document.createRange();
  range.selectNode(document.getElementById("fieldWithResult"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges();// to deselect
}


  function RunScript() {
    var result = document.getElementById('textIN').value
    document.getElementById('fieldWithResult').innerHTML = transliterate(result)
  }
  function copyDivToClipboardReply() {
    document.getElementById('fieldWithResultCopy').innerHTML = "Copied to Clipboard"
  }
  window.addEventListener('load', function load(event){
    var runButton = document.getElementById('runButton')
    runButton.addEventListener('click', function() { RunScript(); copyDivToClipboard();copyDivToClipboardReply()})
})


  
console.log('just to lazy to install phonetic library')