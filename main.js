function addToDo() {
    // create list items
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);


    //create delete button and append to li elements 
    var getUlList = document.getElementById("list1");
    var myList = document.getElementsByTagName("li");
    var i;
    var dltButton = document.createElement("button");
    var dltButtonText = document.createTextNode("Delete");
    dltButton.className = "deletebutton";
    dltButton.appendChild(dltButtonText);
    getUlList.appendChild(dltButton);
    li.appendChild(dltButton);


    //create done button and append to li elements 
    var getUlList2 = document.getElementById("list1");
    var moveButton = document.createElement("button");
    var moveButtonText = document.createTextNode("Done");
    moveButton.className = "donebutton";
    moveButton.appendChild(moveButtonText);
    getUlList2.appendChild(moveButton);
    li.appendChild(moveButton);

    // if user does not write anything alert otherwise append element on list 1 
    if (inputValue === '') {
        alert("Type something!");
    } else {
        document.getElementById("list1").appendChild(li);
    }
    document.getElementById("myInput").value = "";



    // deleting elements & buttons while pressing dltButton 
    dltButton.addEventListener("click", function() {
        if (this.parentElement.parentElement.id == "list1") {
            document.getElementById("list1").removeChild(li);
        } else {
            document.getElementById("list2").removeChild(li);

        }
    });

    //moving button and removing movebutton from list2
    moveButton.addEventListener("click", function(event) {
        document.getElementById("list2").appendChild(li);
        li.removeChild(moveButton)
    })

}


