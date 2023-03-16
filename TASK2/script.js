let input = document.querySelector(".todo-input");
let add = document.querySelector(".btn-warning");
let list = document.querySelector("ul");
let errorMsg = document.querySelector(".text-danger");
let Allclear = document.getElementById("clear")

input.addEventListener("keyup", function(e){
    if (e.target.value.length < 3 || e.target.value.trim()=="") {
        errorMsg.style.display = "inline";
        add.setAttribute("disabled", " ")
    } else {
        errorMsg.style.display = "none";
        add.removeAttribute("disabled", "")
    }
});

add.addEventListener("click", function(e){
    e.preventDefault();
    let newList = document.createElement("li");
    newList.classList.add("d-flex");
    newList.classList.add("list-group-item");
    newList.classList.add("justify-content-between");
    newList.classList.add("align-items-center");
    let span = document.createElement("span");
    span.classList.add("lead");
    span.innerText = input.value;
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.classList.add("btn-danger");
    btn.textContent = "Delete";
    btn.style.marginRight = "5px";
    let markBtn = document.createElement("button");
    markBtn.textContent = "Done";
    markBtn.classList.add("btn");
    markBtn.classList.add("btn-info");
    markBtn.style.marginRight = "5px";
    let upBtn = document.createElement("button");
    upBtn.textContent = "Update";
    upBtn.classList.add("btn");
    upBtn.classList.add("btn-success");
    let btnWrapper = document.createElement("div");
    btnWrapper.append(btn,markBtn,upBtn);
    newList.append(span,btnWrapper);
    list.append(newList);
    input.value = "";

    let deleteButtons = document.querySelectorAll(".btn-danger");
    let markButtons = document.querySelectorAll(".btn-info");
    let upButtons = document.querySelectorAll("btn-success");

    deleteButtons.forEach((deleteBtn)=>{
        deleteBtn.addEventListener("click",function(e){
            e.target.parentElement.parentElement.remove();
        });
    });

    markButtons.forEach((markBtn)=>{
        markBtn.addEventListener("click",function(e){
            let selectedToDo = e.target.parentElement.previousElementSibling;
            selectedToDo.style.textDecoration = "line-through";
        });
    });

    upButtons.forEach((updatebtn) =>{
        updatebtn.addEventListener("click",function(){
            input.removeAttribute();
            updatebtn.innerText = "Save"
        });
    });
});

Allclear.addEventListener("click", function(){
    list.innerHTML = "";
})