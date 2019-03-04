
'use strict';

$(document).ready(function() {
    initializePage();

})
// Variables declared here
var original;
var added;
var pause;
var muted;
var maxFriends;


function initializePage() {

    if(sessionStorage.recountFriends === "true"){
        sessionStorage.maxFriends = "0";
        maxFriends = sessionStorage.getItem("maxFriends");
        maxFriends = parseInt(maxFriends, 10);
    }

    if(document.getElementById('crt') !== null){
        document.getElementById('crt').play();
    }
    added = [];
    original = "green";
    pause = true;
    muted=false;
    // sessionStorage.sessionID = "000000";
    // $('.project a').click(addProjectDetails);
    $('.friend').click(clickFriend);
    $('#bottom-txt').click(testJSON);
    $('#bottom-txt').click(postList);
    $('back-container').click(back);
    $('#player-btn-prev').click(prev);
    $('#player-btn-pause').click(togglePause);
    $('#player-btn-next').click(next);
    $('#mute-button').click(mute);
    $('#listen-btn').click(openOverlay);
    $('#queue-btn').click(openQueueOverlay);
    $('#host-btn').click(createSessionID);
   
    $('#back-container-overlay-queue').click(closeQueueOverlay);
    $('#back-container-overlay').click(closeOverlay);



    // $('#colorBtn').click(randomizeColors);function initializePage() {

    // $('#colorBtn').click(randomizeColors);
}

//this function toggles the overlay
function openOverlay(){
    document.getElementById("friendsOverlay").style.visibility = "visible";
    document.getElementById("background-overlay").style.visibility = "visible";
    document.getElementById("canvas").style.visibility = "visible";

    
}

//this function toggles the overlay
function closeOverlay(){
    document.getElementById("friendsOverlay").style.visibility = "hidden";
    document.getElementById("background-overlay").style.visibility = "hidden";
    document.getElementById("canvas").style.visibility = "hidden";
    // console.log("toggled overlay");
    // var flist = sessionStorage.friends;
    // console.log(flist);
    // console.log(flist.length);
    // var i = 0;
    // for(; i < flist.length; i++){
    //     if(flist[i] === ","){
    //     } else {
    //         sessionStorage.setItem("overlay" + flist[i], "True");
    //     }
    // }
}






//this function toggles the queue overlay
function openQueueOverlay(){
    document.getElementById("queueOverlay").style.visibility = "visible";
    document.getElementById("background-overlay").style.visibility = "visible";
    document.getElementById("canvas").style.visibility = "visible";

    //get current song
    var currSong = sessionStorage.getItem("songs");
    var totalSongs = sessionStorage.getItem("totalSongs");
    currSong = parseInt(currSong, 10);
    // var toRemove = [];
    // var toKeep = [];
    // //make a list of friends to keep
    for(var i = 1; i <= currSong; i++){
        var input = "song" + i;
        var element = document.getElementById(input.toString());
        if (element != null) {
            element.remove();
        } else {
            console.log(input + " is null");
        }
    }

    // //make a list of friends to remove
    // var totalFriends = sessionStorage.getItem("totalFriends");
    // totalFriends = parseInt(totalFriends, 10);

    // for(var i = 1; i <= totalFriends; i++){
    //     if(toKeep.includes(i)){

    //     } else {
    //         toRemove.push(i);
    //     }
    // }

    // for(var i = 0; i < toRemove.length; i++){
    //     var input = "friend" + toRemove[i];
    //     var element = document.getElementById(input.toString());
    //     if (element != null) {
    //         element.remove();
    //     } else {
    //         console.log(input + " is null");
    //     }
    // }
}

//this function toggles the queue overlay
function closeQueueOverlay(){
    document.getElementById("queueOverlay").style.visibility = "hidden";
    document.getElementById("background-overlay").style.visibility = "hidden";
    document.getElementById("canvas").style.visibility = "hidden";
    console.log("toggled overlay");
}

























//this function mutes the session
function mute(){

    var aud = document.getElementById("crt");
    if(muted === true){
        document.getElementById('crt').play();
        muted = false;
        document.getElementById('mute-button').style.backgroundColor = "";
        document.getElementById('mute-button').style.backgroundColor = "transparent";
        document.getElementById('mute-button').style.opacity = "1";
        document.getElementById('mute-button').style.color = "#555555";
        document.getElementById('mute-button-txt').innerHTML = "🔊Mute";
        document.getElementById('img2').style.opacity = "0";
        document.getElementById('img').style.opacity = "1";

        aud.muted = false;
    } else {
        muted = true;
        document.getElementById('mute-button').style.backgroundColor = "rgba(128,128,128,.8)";
        document.getElementById('mute-button').style.color = "white";
        document.getElementById('mute-button-txt').innerHTML = "🔇Unmute";
        document.getElementById('img2').style.opacity = ".8";
        document.getElementById('img').style.opacity = ".5";
        
        aud.muted = true;
    }
}

function createSessionID(){
    var sessionID = makeid();
    sessionStorage.sessionID = sessionID;
    console.log("sessionID in welcome page is:" + sessionID);
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





// This is for music controls:
function prev(e){
    if(sessionStorage.songs > 1){
        sessionStorage.songs = sessionStorage.songs - 1;
        window.location.href = 'hosting';
        document.getElementById('player-btn-prev').disabled = false;
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

    var songs = sessionStorage.songs;
    songs = parseInt(songs, 10);
    var totalSongs = sessionStorage.totalSongs;
    totalSongs = parseInt(totalSongs, 10);
    if(songs < totalSongs){
        var temp = sessionStorage.songs;
        temp++;
        sessionStorage.songs = temp;
        window.location.href = 'hosting';
        document.getElementById('player-btn-next').disabled = false;
    } else{
        sessionStorage.songs = 1;
        console.log("Next song to: " +sessionStorage.totalSongs);
        window.location.href = 'hosting'; 
        // document.getElementById('player-btn-next').disabled = true;
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
        if(sessionStorage.getItem("recountFriends") === "true"){
            maxFriends+= 1;
            sessionStorage.setItem("maxFriends", maxFriends);
        }
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
        if(sessionStorage.getItem("recountFriends") === "true"){
            maxFriends-= 1;
            sessionStorage.setItem("maxFriends", maxFriends);
        }
    }
    $('body').append(toAppend.toString()); 
    toAppend = "";

    sessionStorage.setItem("friends", JSON.stringify(added));
}

function postList(e){
    console.log("inside postlist within host.js");
    console.log(added.toString());

    console.log("inside2 postlist within host.js");
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("friends", JSON.stringify(added));
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
    console.log("inside3 postlist within host.js");
    for(var i = 0; i < maxFriends; i++){
        sessionStorage.setItem("addedFriend" + i, added[i]);
    }

    // window.location.href = 'hostSong';
    window.location.href = 'hostSongA';

    // window.location.href = 'add';
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




