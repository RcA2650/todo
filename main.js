var taskName = document.getElementById("add-box");
var addBtn = document.getElementById("add-btn");

count=0;
let pendingNumber = 0;
let completedNumber = 0;

let pending = {
    
}

let completed = {

}

// function makeAList()
// {
//     var newTodoSection = 
// }

function firstList() // Function to provide the form to create the first Todo list.
{
    document.getElementsByClassName("firstTodoList")[0].style.display = "none";
    document.getElementsByClassName("addtodo")[0].style.display = "block";
    var listDivs = document.getElementsByClassName("list");
    for(var i = 0; i<listDivs.length;i++)
    {
        listDivs[i].style.display = "block";
    }
    
}
function addTask(taskName)
{

    var newTodo = document.createElement("li");
    newTodo.id = `newItemList-${count}`;
    
    pending;
    var newItem = document.getElementById("add-box").value;
    if(newItem === "")
    {
        alert("Can't add empty item!");
    }
    else
    {
        
        var doneBox = document.createElement("input");
        doneBox.id = `newItemBox-${count}`;
        doneBox.style.display = 'none';

        var label = document.createElement("label");
        label.setAttribute("class","strikethrough");
        label.innerText = newItem;
        count = count +1;
        label.id = `newItem-${count}`;
        label.setAttribute("onclick", "check(event)");
        label.setAttribute("for",`newItemLabel-${count}`);
        doneBox.type = "checkbox";
        var deleteButton = document.createElement("i");
        deleteButton.id = "deleteButton";
        deleteButton.setAttribute("class", "fas fa-times");
        deleteButton.setAttribute("onclick", "deleteItem(event)");
        newTodo.appendChild(doneBox);
        newTodo.appendChild(label);
        newTodo.appendChild(document.createTextNode('\u00A0'));
        newTodo.appendChild(deleteButton);
        
        
        document.getElementById("toDoList").appendChild(newTodo);
        document.getElementById("add-box").value = "";
        pending[pendingNumber] = newItem;
        pendingNumber+=1;
    }
    
}
function deleteItem(e)
{
    var idDelete = e.target.id;
    document.getElementById(idDelete).parentElement.remove();
}

function check(e)
{
    let idOfTarget = e.target.id;
    if(document.getElementById(e.target.id).previousSibling.checked === true)
    {
        document.getElementById(idOfTarget).previousSibling.checked = false;
        var tempToDo = document.getElementById(idOfTarget).parentElement.cloneNode(true);
        document.getElementById(idOfTarget).parentElement.remove();
        document.getElementById("toDoList").appendChild(tempToDo);
    }
    else
    {

        
        document.getElementById(idOfTarget).previousSibling.checked=true;
        var tempToDo  = document.getElementById(idOfTarget).parentElement.cloneNode(true);
        document.getElementById(idOfTarget).parentElement.remove();
        document.getElementById("completedList").appendChild(tempToDo);
    }

}

// for(;;)
// {
//     document.getElementsByClassName;
// }