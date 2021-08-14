var button=document.getElementById("Enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");

function inputlength(){
    return input.value.length;
}

function createListElement(){
        var div=document.createElement("div");
        var li=document.createElement("li");
        var delButton=document.createElement("button");
        div.classList.add("wrapper");
        ul.appendChild(div);
        div.append(li,delButton);
        li.classList.add("listclass");
        li.appendChild(document.createTextNode(input.value));
        input.value="";
        delButton.classList.add("delclass");
        delButton.innerHTML="Del";
}
function addListAfterClick(){
    if(inputlength()>0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputlength()>0 && event.keyCode==13){
        createListElement();
    }
}

function strikeThrough(task){
	if(task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

function deleteElement(element){
    if(element.target.className === "delclass"){
        element.target.parentElement.remove();
    }
}

function handleListClick(element){
    strikeThrough(element);
    deleteElement(element);

}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);
ul.addEventListener("click",handleListClick);




