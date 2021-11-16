var taskName = document.getElementById("add-box");
var addBtn = document.getElementById("add-btn");
count=0;
let pendingNumber = 0;
let completedNumber = 0;

let pending = {
    
}

let completed = {

}


function addTask(taskName)
{
    //var divForItem = document.createElement("div");
    //divForItem.setAttribute("class", `itemDiv-${count+1}`);
    var newTodo = document.createElement("li");
    newTodo.id = `newItemList-${count}`;
    
    //divForItem.appendChild(newTodo);
    var newItem = document.getElementById("add-box").value;
    if(newItem === "")
    {
        alert("Can't add empty item!");
    }
    else
    {
        
        //document.getElementsByClassName("list").setAttribute("onclick", "check(event)");
        // divForItem.setAttribute("onclick", "check(event)");
        // li.appendChild(newTodo);
        var doneBox = document.createElement("input");
        doneBox.id = `newItemBox-${count}`;

        var label = document.createElement("label");
        label.setAttribute("class","strikethrough");
        label.innerText = newItem;
        count = count +1;
        label.id = `newItem-${count}`;
        label.setAttribute("onclick", "check(event)");
        label.setAttribute("for",`newItemLabel-${count}`);
        //var t = document.createTextNode(lbl);
        doneBox.type = "checkbox";
        
        newTodo.appendChild(doneBox);
        newTodo.appendChild(label);
        
        //newTodo.appendChild(t);
        
        document.getElementById("tlist").appendChild(newTodo);
        document.getElementById("add-box").value = "";
        pending[pendingNumber] = newItem;
        //console.log(pending);
        pendingNumber+=1;
    }
    
}

// var checkBox = document.querySelector("input[type=checkbox]");

// checkBox.addEventListener('change', function(){
//     if(this.checked){
//        comsole.log(document.getElementById(`newItemBox-${count+1}`));
//     }

// });
// function check(this)
// {

// }
function check(e)
{
    // alert(e.target.innerText);
    // alert(e.target.id);
    let idOfTarget = e.target.id;
    if(document.getElementById(e.target.id).previousSibling.checked === true)
    {
        document.getElementById(idOfTarget).previousSibling.checked = false;
        var tempToDo = document.getElementById(idOfTarget).parentElement.cloneNode(true);
        document.getElementById(idOfTarget).parentElement.remove();
        document.getElementById("tlist").appendChild(tempToDo);
    }
    else
    {
        //let val = e.target.innerText;
        
        document.getElementById(idOfTarget).previousSibling.checked=true;
        // var tempToDo = document.createElement("li");
        var tempToDo  = document.getElementById(idOfTarget).parentElement.cloneNode(true);
        console.log(document.getElementById(idOfTarget).parentElement);
        document.getElementById(idOfTarget).parentElement.remove();
        console.log(tempToDo);
        document.getElementById("clist").appendChild(tempToDo);
    }
    

    //document.getElementById(idOfTarget).setAttribute("style", "text-decoration: line-through");
   // document.getElementById(e.target.id).parentElement.checked = true;
    //var newCompleted = document.createElement("li");
    //newCompleted.appendChild(e.target);
    
   // e.target.style.text-decoration : "line-through";
   // document.getElementById(idOfTarget);
    //document.getElementById("clist").appendChild(newTodo);

}

// for(;;)
// {
//     document.getElementsByClassName;
// }