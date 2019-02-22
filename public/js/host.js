
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
    $('#bottom-txt').click(testJSON);
    $('#bottom-txt').click(postList);
    $('back-container').click(back);
    $('#player-btn-prev').click(prev);
    $('#player-btn-pause').click(togglePause);
    $('#player-btn-next').click(next);

    // $('#colorBtn').click(randomizeColors);
}




// This is for music controls:
function prev(e){
    if(sessionStorage.songs > 1){
        sessionStorage.songs = sessionStorage.songs - 1;
        window.location.href = 'hosting';
    } else{
        document.getElementById('player-btn-prev').disabled = true;
    }
}

function togglePause(e){
    console.log("inner player");
    console.log("currently playing: " + document.getElementById('player').src);
    if(document.getElementById('crt').paused){ 
        document.getElementById('crt').play();
        document.getElementById('player-btn-pause').innerHTML = "II";
    } else {
        document.getElementById('crt').pause();
        document.getElementById('player-btn-pause').innerHTML = "►";
    }
    console.log("Testing pause button:" + sessionStorage.songs);
}

function next(e){
    if(sessionStorage.songs < 5){
        var temp = sessionStorage.songs;
        temp++;
        sessionStorage.songs = temp;
        console.log( "next to: " + sessionStorage.songs);
        window.location.href = 'hosting';
    } else{
        document.getElementById('player-btn-next').disabled = true;
    }
}



















// end for music controls










function makeAlert(e){
  alert("Hello! I am an alert box!");
}

// Change color when friends are clicked as well as changing the return list
function clickFriend(e){
    var clicked = false;
    var friendID = $(this).closest('.friend').attr('id');
    var id = friendID.substr('friend'.length);

    // get class name of the friend's name's text
    var container = document.getElementById(friendID).children[1];
    var cla = (container.firstElementChild.className).substr('.h5'.length);

    var toAppend = "";

    // divChild = document.getElementById("divParent").children[0];

    if((document.getElementById(friendID).style.backgroundColor).localeCompare(original) != 0){
        // using JS to change background color:
        document.getElementById(friendID).style.backgroundColor = original;

        // using jquerey to append to CSS
        toAppend = '<style type="text/css"> .' + cla + '{color: white;}</style>';

        // console out put:
        console.log("User clicked on user " + friendID + ' clicked');
        added.push(id.toString());
    } else {
        // using JS to change background color:
        document.getElementById(friendID).style.backgroundColor = "#fffff0";

        // using jquerey to append to CSS
        toAppend = '<style type="text/css"> .' + cla + '{color: #000080;}</style>';
        
        // delete from array:
        var i = 0;
        var len = added.length;
        var tempArr = [];
        for (; i < len; i++) {
            if(id.localeCompare(added[i]) != 0){
                tempArr.push(added[i]);
            }
        }
        added = tempArr;
        // console out put:
        console.log("User clicked on user " + friendID + ' unclicked');
    }
    $('body').append(toAppend.toString()); 
    toAppend = "";

    sessionStorage.friends = added;
}

function postList(e){

    console.log(added.toString());

    if (typeof(Storage) !== "undefined") {
        sessionStorage.friends = added;
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
    window.location.href = 'add';
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


