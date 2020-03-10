//M asked stus for "what games are you playing"
let gamesTitles = ['Dark Souls', 'Halo 3', 'Democracy 3', 'Katamari 3', 'Half Life 3'];

for(i = 0; i < gamesTitles.length; i++)
{
    console.log('Game title', i, 'is', gamesTitles[i]);
}

//next I want my server.js to logout my game info.
//S "you could source it into the HTML"
//M "no index.html BUT we do have modeuls"
//"modules can export something"
//"You can think of it like trade if you want. One country
//will export, another gets imports. That's mary's SS lesson 
//for the day."

//export games  (M: I miss the s on exports, it should all be green)
module.exports = gamesTitles;  //M "make sure you're exporting your array."
//M understanding check now: "everyone ok with exmports?"