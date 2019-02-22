
/*
 * Add function
 */

 var addLoc = require('../session.json');
 var songLoc = require('../songs.json');

 exports.addFunction = function(req, res){
    // var toAdd = window.sessionStorage.getItem(friends);
    // var i = 0;
    // var len = toAdd.length;

    // var newData;

    // // loop through friends to add
    // for(; i < len; i++){
    //     var next = "friend" + toAdd[i].toString();
    //     newData = window.sessionStorage.getItem(next);
    // }

    var newData = {
            "hostName": req.query.hostName,
            "hostCode": req.query.hostCode,
            "hostPic": req.query.hostPic,
            "songTitle": req.query.songTitle,
            "artist": req.query.artist,
            "album": req.query.album,
            "songImg": req.query.songImg,
            "songID": req.query.songID,
            "friends": req.query.friends
    };

    addLoc.session.push(newData);
    res.render('hostSong', songLoc);
    // res.render('hostSong', addLoc);
};

