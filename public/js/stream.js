
'use strict';

$(document).ready(function() {
    initializePage();
})


// Variables declared here
var original;
var added;
var pause;


function initializePage() {


    added = [];
    original = "green";
    pause = true;
    sessionStorage.sessionID = "000000";
    // $('.project a').click(addProjectDetails);
    $('.friend').click(clickFriend);
    $('back-container').click(back);
    $('#player-btn-prev').click(prev);
    $('#player-btn-pause').click(togglePause);
    $('#player-btn-next').click(next);

    // $('#colorBtn').click(randomizeColors);
}





function makeAlert(e){
  alert("Hello! I am an alert box!");
}

// Change color when friends are clicked as well as changing the return list
function clickFriend(e){



//     var clicked = false;
    var friendID = $(this).closest('.friend').attr('id');
    var hCode = friendID.substr('friend'.length);
    sessionStorage.setItem(hostCode, hCode);

    console.log("host code: " + hCode);
//     var id = friendID.substr('friend'.length);

//     // get class name of the friend's name's text
    // var container = document.getElementById(friendID).children[1];
    // var cla = (container.firstElementChild.className).substr('.h5'.length);

//     var toAppend = "";

//     // divChild = document.getElementById("divParent").children[0];

//     if((document.getElementById(friendID).style.backgroundColor).localeCompare(original) != 0){
//         // using JS to change background color:
//         document.getElementById(friendID).style.backgroundColor = original;

//         // using jquerey to append to CSS
//         toAppend = '<style type="text/css"> .' + cla + '{color: white;}</style>';

//         // console out put:
//         console.log("User clicked on user " + friendID + ' clicked');
//         added.push(id.toString());
//     } else {
//         // using JS to change background color:
//         document.getElementById(friendID).style.backgroundColor = "#fffff0";

//         // using jquerey to append to CSS
//         toAppend = '<style type="text/css"> .' + cla + '{color: #000080;}</style>';
        
//         // delete from array:
//         var i = 0;
//         var len = added.length;
//         var tempArr = [];
//         for (; i < len; i++) {
//             if(id.localeCompare(added[i]) != 0){
//                 tempArr.push(added[i]);
//             }
//         }
//         added = tempArr;
//         // console out put:
//         console.log("User clicked on user " + friendID + ' unclicked');
//     }
//     $('body').append(toAppend.toString()); 
//     toAppend = "";

//     sessionStorage.friends = added;

    window.location.href = 'streaming';
}

function back(e){
    console.log(added.toString());
    sessionStorage.friends = added;

    if (typeof(Storage) !== "undefined") {
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
}

function testJSON(e){
    // console.log(sessionStorage.getItem('friend3'));
    if(typeof(output) !="undefined"){
        var output = sessionStorage.friends;
        var i = 0;
        var len = output.length;

    // loop through friends to add
    for(; i < len; i++){
        var next = "friend" + output[i].toString();
        sessionStorage.getItem(next);
        console.log(sessionStorage.getItem(next));
    }
}
}


