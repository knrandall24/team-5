
'use strict';

$(document).ready(function() {
    initializePage();
})



function initializePage() {
    var sessionID = makeid();
    // sessionStorage.sessionID = sessionID;
    // console.log("sessionID in welcome page is:" + sessionID);
    // $('#colorBtn').click(randomizeColors);
}

//this function generates random sessionID
function makeid() {
  var text = "";
  var possibleAlpha = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  var possibleNum = "0123456789";
  var possibleEnding = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789";
  text += possibleAlpha.charAt(Math.floor(Math.random() * possibleAlpha.length));

  for (var i = 0; i < 5; i++){
    text += possibleNum.charAt(Math.floor(Math.random() * possibleNum.length));
    }

    text += possibleEnding.charAt(Math.floor(Math.random() * possibleEnding.length));

    return text;
}



