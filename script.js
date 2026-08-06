chrome.storage.sync.get(
[
"theme",
"background"
],

(data)=>{


if(data.background){

document.body.style.backgroundImage =
"url("+data.background+")";

}



if(data.theme=="amoled"){

document.body.style.background =
"#000";

}


if(data.theme=="blue"){

document.body.style.background =
"linear-gradient(135deg,#001f3f,#0074D9)";

}


if(data.theme=="purple"){

document.body.style.background =
"linear-gradient(135deg,#240046,#9d4edd)";

}


});