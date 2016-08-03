// ==UserScript==
// @name         Amazon2Calil
// @namespace    http://tampermonkey.net/
// @version      0.1b
// @author       crycli87
// @match        https://www.amazon.co.jp/*
// @require      http://code.jquery.com/jquery-2.1.4.js
// @grant        GM_log
// ==/UserScript==

var isbnSelector = "div#detail_bullets_id li:contains('ISBN-10')";

(function main() {
  if(!isBookPage()){
    return;
  }
  var isbn = getIsbn();
  var link2Calil = "<a href='https://calil.jp/book/" + isbn + "' target='_blank'>カーリルで開く</a>";
  $("div#rightCol").append(link2Calil);
})();

function isBookPage(){
  return $(isbnSelector).length !== 0;
}

function getIsbn(){
  return $(isbnSelector).text().slice(-10);
}
