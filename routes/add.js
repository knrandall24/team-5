
/*
 * Add function
 */

 var addLoc = require('../data.json');
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

    // var newData = {
    //     "name": "New player",
    //     "description": "Only friend with a Navy ship named after them",
    //     "imageURL": "/img/filler_profile.png",
    //     "id": "55",
    //     "slected": "0"
    // };

    // addLoc.friend.push(newData);
    res.render('hostSong', songLoc);
};

