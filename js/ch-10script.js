//ch10 example1

/*
var myImages = [
	"images/lg-meeting-may-1-2017.jpg",
	"images/koala.jpg",
	"images/desert.jpg",
	"images/penguins.jpg"
];

var random1 = Math.floor(Math.random()*(myImages.length-1));
var random2;


if(random1==myImages.length-1){
	random2 = random1 - 1;
}
else{
	random2 = random1 + 1;
}

document.images[0].src = myImages[random1];
document.images[1].src = myImages[random2];

function changeImg(e){
	var random3 = Math.round(Math.random()*(myImages.length-1));
	while(e.target.src.indexOf(myImages[random3]) != -1){
		random3 = Math.round(Math.random()*(myImages.length-1));
	}
	e.target.src = myImages[random3];
	
}

function changeBkgrnd(e){
	document.body.style.backgroundColor = "rgb("+rnd(255)+","+rnd(255)+","+rnd(255)+")";
}

function rnd(number){
	var random4 = Math.floor(Math.random()*(number + 1));
	return random4;
}

//document.getElementById("img0").onclick = changeImg;
document.getElementById("img0").addEventListener("click",changeImg);
document.getElementById("img0").addEventListener("click",changeBkgrnd);
document.getElementById("img1").onclick = changeImg;

for(var i=0;i<16;i++){
	var myDiv = document.createElement("div");
	document.body.appendChild(myDiv);
	myDiv.setAttribute("id","disappear"+(i+1));
}

var divs = document.querySelectorAll("div");

function whiteBackground(e){
	e.target.style.backgroundColor = "white";
	e.target.innerHTML = "";
}

function redBackground(e){
	e.target.style.backgroundColor = "red";
}

for(var i=0;i<divs.length;i++){
	divs[i].addEventListener("mouseover",whiteBackground);
	divs[i].addEventListener("mouseout",redBackground);
}


function playAround(e){
	var random5 = Math.round(Math.random()*1000);
	var random6 = Math.round(Math.random()*(divs.length-1));
	while(divs[random6].style.backgroundColor == "yellow"){
		random6 = Math.round(Math.random()*(divs.length-1));
	}
	divs[random6].style.backgroundColor = "yellow";
	divs[random6].innerHTML = "$"+random5;
}

function letsReset(){
	location.reload();
}

document.getElementById("play").addEventListener("click",playAround);
document.getElementById("reset").addEventListener("click",letsReset);
*/
//ch10 ex8
/*
function handleEvent(e){
	var target = e.target;
	var type = e.type;
	if(target.tagName === "P"){
		if(type === "mouseover"){
			target.className = "underline";
		}
		else if(type === "mouseout"){
			target.className = "";
		}
	}
	if(type === "click"){
		alert("You clicked at X: "+e.clientX+" and Y: "+e.clientY);
	}
}

document.addEventListener("click",handleEvent);
document.addEventListener("mouseover",handleEvent);
document.addEventListener("mouseout",handleEvent);
*/

//ch10 ex9
/*
function handleEvent(e){
	var target = e.target;
	switch(e.type){
		case "mouseover":
		if(target.className === "tabStrip-tab"){
			target.className = "tabStrip-tab-hover";
		}
		break;
		case "mouseout":
		if(target.className === "tabStrip-tab-hover"){
			target.className = "tabStrip-tab";
		}
		break;
		case "click":
		if(target.className === "tabStrip-tab-hover"){
			target.className = "tabStrip-tab-click";
			var num = target.getAttribute("data-tab-number");
			showDescription(num);
		}
		break;
	}
}

function showDescription(num){
	var text = "Description for Tab "+num;
	descContainer.innerHTML = text;
}

document.addEventListener("click",handleEvent);
document.addEventListener("mouseover",handleEvent);
document.addEventListener("mouseout",handleEvent);
*/

//ch 10 ex 18
/*
function handleDragEnter(e){
	dropStatus.innerHTML = "You are dragging something!";
}

dropZone.addEventListener("dragenter",handleDragEnter);
*/

//ch 10 ex 21
/*
var dragSrcEl = null;

function handleDragStart(e){
	e.target.style.opacity = "0.4";
	dragSrcEl = e.target;
	e.dataTransfer.effectAllowed = "move";
	e.dataTransfer.setData("text/html",e.target.innerHTML);
	
	var dragIcon = document.createElement("img");
	dragIcon.src = "images/penguins.jpg";
	dragIcon.height = 100;
	
	e.dataTransfer.setDragImage(dragIcon,-10,-10);
}

function handleDragOver(e){
	e.preventDefault();
	e.dataTransfer.dropEffect = "move";
}

function handleDragEnter(e){
	e.target.classList.add("over");
}

function handleDragLeave(e){
	e.target.classList.remove("over");
}

function handleDrop(e){
	e.stopPropagation();
	e.preventDefault();
	
	if(dragSrcEl != e.target){
		dragSrcEl.innerHTML = e.target.innerHTML;
		e.target.innerHTML = e.dataTransfer.getData("text/html");
	}
	return false;
}

function handleDragEnd(e){
	e.target.classList.remove("over");
	e.target.style.backgroundColor = "green";
}

var cols = document.querySelectorAll(".column");

for(var i = 0;i<cols.length;i++){
	cols[i].addEventListener("dragstart",handleDragStart,false);
	cols[i].addEventListener("dragover",handleDragOver,false);
	cols[i].addEventListener("dragenter",handleDragEnter,false);
	cols[i].addEventListener("dragleave",handleDragLeave,false);
	cols[i].addEventListener("drop",handleDrop,false);
	cols[i].addEventListener("dragend",handleDragEnd,false);
}
*/

function handleDragStart(e){
	e.dataTransfer.setData("text/html",e.target.id);
}

function handleEnterLeave(e){
	if(e.type == "dragenter"){
		e.target.setAttribute("class","drag-enter");
	}
	else if(e.type == "dragleave"){
		e.target.classList.remove("drag-enter");
	}
}

function handleDragOver(e){
	e.preventDefault();
}

function handleDrop(e){
	e.preventDefault();
	e.stopPropagation();
	
	e.target.id = e.dataTransfer.getData("text/html");
}

var divs = document.querySelectorAll("[data-drop-target]");

for(var i = 0;i<divs.length;i++){
	divs[i].addEventListener("dragenter",handleEnterLeave,false);
	divs[i].addEventListener("dragleave",handleEnterLeave,false);	
}