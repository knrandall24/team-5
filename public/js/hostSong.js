
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
    $('.friend').click(postList);

    // $('#colorBtn').click(randomizeColors);
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
            console.log(temp);
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
    window.location.href = 'add';
    window.location.href = 'hosting';
}




