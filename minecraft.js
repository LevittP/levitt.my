async function checkMinecraft(){


let server =
"levitt.my";


try{


let response =
await fetch(
"https://api.mcsrvstat.us/3/"
+server
);


let data =
await response.json();



if(data.online){


document
.getElementById("minecraft")
.innerHTML =

"🟢 Online<br>" +

"Players: " +

data.players.online
+

"/"

+

data.players.max;


}

else{


document
.getElementById("minecraft")
.innerHTML =

"🔴 Offline";


}


}

catch{


document
.getElementById("minecraft")
.innerHTML =

"Error";


}


}


checkMinecraft();