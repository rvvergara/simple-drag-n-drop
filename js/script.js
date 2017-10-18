function handleStart(e){	
	e.stopPropagation();
	if(e.currentTarget != e.target){
		e.target.classList.add("start");
		e.dataTransfer.setData("text/html",e.target.innerHTML);		
	}
	return false;
}

function handleEnd(e){
	e.stopPropagation();
	if(e.currentTarget!=e.target){
		document.getElementById("draggables").removeChild(e.target);
	}
}

function handleEnterLeave(e){
	if(e.type == "dragenter"){
		e.target.classList.add("enter");
	}
	else{
		e.target.classList.remove("enter");
	}
}

function handleOverDrop(e){
	if(e.type == "dragover"){
		e.preventDefault();
	}
	else if(e.type == "drop"){
		e.target.innerHTML = e.dataTransfer.getData("text/html");
		e.target.classList.remove("enter");
	}	
}

var draggables = document.getElementById("draggables");

draggables.addEventListener("dragstart",handleStart);
draggables.addEventListener("dragend",handleEnd);

document.getElementById("drag-target").addEventListener("dragover",handleOverDrop);
document.getElementById("drag-target").addEventListener("drop",handleOverDrop);
document.getElementById("drag-target").addEventListener("dragenter",handleEnterLeave);
document.getElementById("drag-target").addEventListener("dragleave",handleEnterLeave);

