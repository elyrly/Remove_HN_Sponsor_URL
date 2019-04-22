// ==UserScript==
// @name         Remove HackerNews Support Link
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://news.ycombinator.com/news
// @include      https://news.ycombinator.com/news*
// @include      https://news.ycombinator.com/
// @grant        window.focus
// @run-at       document-start
// ==/UserScript==
(function() {
    'use strict';
    $(window).ready(function() {
        console.log("Test");
    });
})();

setTimeout(function() {
    //console.log("change ycombinator title bar colors");
    //var x = document.getElementById('hnmain').getElementsByTagName("td")[0].bgColor = 'CECFD2';

    var spans = document.getElementsByClassName("subtext");
    for (i = 0; i < spans.length; i++) {
        if (spans[i].textContent.match(/points by{1}/gm) == null) {
            console.log(document.getElementsByClassName("athing")[i].remove());
            console.log(spans[i].parentElement.remove());
            alert("Hacker News Ad Removed #" + (i + 1)); //change to console.log for less noise
        };
    };

}, 0);