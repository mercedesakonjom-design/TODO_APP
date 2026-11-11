let addBtn = document.getElementById("Add");
let input = document.getElementById("input");
let list = document.getElementById("list");

addBtn.addEventListener("click", function(){
    input.value
    if(input.value == ""){
        return
    }

    let listFile = document.createElement("li");
    listFile.innerHTML = input.value;
    let remove = document.createElement("button");
    remove.innerText = "Remove";
    list.appendChild(listFile);
    listFile.appendChild(remove);
    input.value = "";

    remove.addEventListener("click", function(){
        listFile.remove()
    })
})