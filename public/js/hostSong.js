
'use strict';

$(document).ready(function() {
    initializePage();
})


// Variables declared here
var original;
var added;
var start;


function initializePage() {
    start = false;


    added = "";
    original = "green";
    // $('.project a').click(addProjectDetails);
    $('.friend').click(clickSong);
    $('.friendB').click(clickSongB);
    $('.friend').click(postList);

    //shuffle button stuff
    $('#suffleA').click(shuffleA);

    $('#shuffleB').click(shuffleB);
    // $('#colorBtn').click(randomizeColors);

}


//this function shuffles songs
function shuffleA(){
    var totalSongs = sessionStorage.totalSongs;
    totalSongs = parseInt(totalSongs, 10);
    var song = Math.floor(Math.random() * Math.floor(totalSongs));
    song += 1;
    console.log("Random song: " + song);
    sessionStorage.songs = song;
    window.location.href = 'hosting';
}

function shuffleB(){
    buttonColorReset();
    changeBottom();
    var totalSongs = sessionStorage.totalSongs;
    totalSongs = parseInt(totalSongs, 10);
    var song = Math.floor(Math.random() * Math.floor(totalSongs));
    song += 1;
    console.log("Random song: " + song);
    sessionStorage.songs = song;
    // var toAppend = '<style type="text/css"> #shuffleB{border: 1px solid green;font-size: 16px;cursor: pointer;text-align: center;padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #F0F1FF;background-color: #A0DA94; background-image: -webkit-gradient(linear, left top, left bottom, from(#A0DA94), to(#0BB310));background-image: -webkit-linear-gradient(top, #A0DA94, #0BB310);background-image: -moz-linear-gradient(top, #A0DA94, #0BB310);background-image: -ms-linear-gradient(top, #A0DA94, #0BB310);background-image: -o-linear-gradient(top, #A0DA94, #0BB310);background-image: linear-gradient(to bottom, #A0DA94, #0BB310);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#A0DA94, endColorstr=#0BB310);}</style>';
    var toAppend = '<style type="text/css"> #shuffleB{color: #222457; background-color: #11FF00; background-image: -webkit-gradient(linear, left top, left bottom, from(#11FF00), to(#2DC200)); background-image: -webkit-linear-gradient(top, #11FF00, #2DC200); background-image: -moz-linear-gradient(top, #11FF00, #2DC200); background-image: -ms-linear-gradient(top, #11FF00, #2DC200); background-image: -o-linear-gradient(top, #11FF00, #2DC200); background-image: linear-gradient(to bottom, #11FF00, #2DC200);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#11FF00, endColorstr=#2DC200);}</style>';
    $('#shuffleB').append(toAppend.toString()); 
}




// Change color when friends are clicked as well as changing the return list
function clickSong(e){
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
        console.log("User clicked on song " + friendID + ' clicked');
        added = (friendID).substr('friend'.length);

        if(start === true){
            var temp = 'friend' + sessionStorage.songs;
            document.getElementById(temp).style.backgroundColor = "#fffff0";
            added = id.toString();
        }
    } else {
        // using JS to change background color:
        document.getElementById(friendID).style.backgroundColor = "#fffff0";

        // using jquerey to append to CSS
        toAppend = '<style type="text/css"> .' + cla + '{color: #000080;}</style>';

        // console out put:
        console.log("User clicked on song " + friendID + ' unclicked');
    }

    $('body').append(toAppend.toString()); 
    toAppend = "";
    sessionStorage.songs = added;
    sessionStorage.songsTitle = document.getElementById(friendID).children[1].children[0].innerHTML;
    sessionStorage.songsArtist = document.getElementById(friendID).children[2].children[0].innerHTML;
    sessionStorage.songsAlbum = document.getElementById(friendID).children[2].children[1].innerHTML;

    console.log("song artist: " +sessionStorage.songsArtist);
    console.log("song album: " +sessionStorage.songsAlbum);

    console.log("added song: " + sessionStorage.songs);
    start = true;
}

function postList(e){

    console.log(added.toString());

    if (typeof(Storage) !== "undefined") {
        sessionStorage.songs = added;
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
    // window.location.href = 'hosting';
}






//Below is the duplicate functions for Testing hostSongB

// Change color when friends are clicked as well as changing the return list
function clickSongB(e){
    buttonColorReset();
    var friendID = $(this).closest('.friendB').attr('id');
    var id = friendID.substr('friend'.length);

    // get class name of the friend's name's text
    var container = document.getElementById(friendID).children[1];
    var friendNameID = (container.firstElementChild.className).substr('.h5'.length);

    var toAppend = "";


    // divChild = document.getElementById("divParent").children[0];

    if((document.getElementById(friendID).style.backgroundColor).localeCompare(original) != 0){
        //reset every button's color
        changeBottom();

        // using JS to change background color:
        document.getElementById(friendID).style.backgroundColor = original;

        // document.getElementById("friendName").style.color ="white";  //TODO

        // using jquerey to append to CSS
        toAppend = '<style type="text/css"> .' + friendNameID + '{color: white;}</style>';

        added = (friendID).substr('friend'.length);
    } else {

        document.getElementById(friendID).style.backgroundColor = "white";
        // console out put:
        console.log("User clicked on song " + friendID + ' unclicked');
    }


    $('body').append(toAppend.toString()); 
    toAppend = "";
    sessionStorage.songs = added;
    sessionStorage.songsTitle = document.getElementById(friendID).children[1].children[0].innerHTML;
    sessionStorage.songsArtist = document.getElementById(friendID).children[2].children[0].innerHTML;
    sessionStorage.songsAlbum = document.getElementById(friendID).children[2].children[1].innerHTML;

    console.log("song artist: " +sessionStorage.songsArtist);
    console.log("song album: " +sessionStorage.songsAlbum);

    console.log("added song: " + sessionStorage.songs);
    start = true;
}






function postListB(e){

    console.log(added.toString());

    if (typeof(Storage) !== "undefined") {
        sessionStorage.songs = added;
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
    // window.location.href = 'hosting';
}

//function to reset all colors of everything
function buttonColorReset(){
    document.getElementById("friend1").style.backgroundColor = "white";

    //loop through each friend element
    var totalSongs = sessionStorage.getItem("totalSongs");
    totalSongs = parseInt(totalSongs,10);

    for(var i = 1; i <= totalSongs; i++){
        var input = "friend" + i;
        if(document.getElementById(input)){
            document.getElementById(input).style.backgroundColor = "#fffff0";
        }

        //reset the background color of each friend
        var toAppend = '<style type="text/css"> .friendName' + i + '{color: #000080;}</style>';
        $('body').append(toAppend.toString()); 
    }


    //reset the color of each text
    toAppend = '<style type="text/css"> .friendB{color: white;}</style>';
    $('body').append(toAppend.toString()); 


    //reset the color of each text
    // toAppend = '<style type="text/css"> #friendName{color: #000030;}</style>';
    // $('body').append(toAppend.toString()); 

    toAppend = '<style type="text/css"> #shuffleB { -webkit-box-shadow: 0 1px 0 #462c95, 0 15px 20px rgba(0, 0, 0, .35); -moz-box-shadow: 0 1px 0 #462c95, 0 15px 20px rgba(0, 0, 0, .35); box-shadow: 0 1px 0 #462c95, 0 15px 20px rgba(0, 0, 0, .35); display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #3EA900; background-color: #E7FFE3; background-image: -webkit-gradient(linear, left top, left bottom, from(#E7FFE3), to(#D0F5D3)); background-image: -webkit-linear-gradient(top, #E7FFE3, #D0F5D3); background-image: -moz-linear-gradient(top, #E7FFE3, #D0F5D3); background-image: -ms-linear-gradient(top, #E7FFE3, #D0F5D3); background-image: -o-linear-gradient(top, #E7FFE3, #D0F5D3); background-image: linear-gradient(to bottom, #E7FFE3, #D0F5D3);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#E7FFE3, endColorstr=#D0F5D3);}</style>';
    $('#shuffleB').append(toAppend.toString()); 
}

//change the bottom button
function changeBottom(){
   document.getElementById("bottom-txt").innerHTML = "Send Invite + Start Session";

   var toAppend = '<style type="text/css"> #bottom-txt{text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #F0F1FF;background-color: #A0DA94; background-image: -webkit-gradient(linear, left top, left bottom, from(#A0DA94), to(#0BB310));background-image: -webkit-linear-gradient(top, #A0DA94, #0BB310);background-image: -moz-linear-gradient(top, #A0DA94, #0BB310);background-image: -ms-linear-gradient(top, #A0DA94, #0BB310);background-image: -o-linear-gradient(top, #A0DA94, #0BB310);background-image: linear-gradient(to bottom, #A0DA94, #0BB310);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#A0DA94, endColorstr=#0BB310);}</style>';

   $('#bottom-txt').append(toAppend.toString()); 
}


// END REPEAT for hostSongB testing