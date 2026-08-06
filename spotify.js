const CLIENT_ID =
"223fd828542745e08fce3d31e684be3e";


async function spotifyStatus(){


let token =
localStorage.getItem(
"spotify_token"
);



if(!token){

document
.getElementById("spotify")
.innerHTML =
"Not connected";

return;

}



try{


let response =
await fetch(

"https://api.spotify.com/v1/me/player",

{

headers:{

Authorization:
"Bearer "+token

}

}

);



let data =
await response.json();



if(data.item){


document
.getElementById("spotify")
.innerHTML =

data.item.name
+
"<br>"
+
data.item.artists[0].name;


}

else{


document
.getElementById("spotify")
.innerHTML =
"Nothing playing";


}


}

catch{


document
.getElementById("spotify")
.innerHTML =
"Spotify error";


}


}



spotifyStatus();