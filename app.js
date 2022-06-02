function handler(e) {
  var input = document.getElementById("input");
  var list = document.getElementById("todoList");
  var li = document.createElement("li");
  var liText = document.createTextNode(input.value);
  var editBTn = document.createElement("button");
  var deleteBTn = document.createElement("button");
  editBTn.innerHTML = "Edit";
  deleteBTn.innerHTML = "Delete";

  if (e == "add") {
    list.appendChild(li);
    li.append(liText);
    input.value = "";
    li.appendChild(editBTn);
    editBTn.setAttribute("onclick", "editBtn(this)");

    li.appendChild(deleteBTn);
    deleteBTn.setAttribute("onclick", "deleteBTn(this)");
    // list.innerHTML = ""
  }
  if (e == "DeleteAll") {
      
    list.innerHTML = "";
  }
  //   console.log(li);
}

function editBtn(e) {
  var editValue = prompt("Enter You Value", e.parentNode.firstChild.nodeValue);
  e.parentNode.firstChild.nodeValue = editValue;
}

function deleteBTn(e) {
  e.parentNode.remove();
}














































// function handler(){
    
// }