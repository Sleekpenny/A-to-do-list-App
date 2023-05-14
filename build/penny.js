
let form = document.querySelector(".form-list")
let input = document.querySelector("#typeInput")
let TaskList = document.querySelector(".fulllist")
let alertinfo = document.querySelector(".alert")
let clearBox = document.querySelector(".clearbox")


window.addEventListener("load",()=>{
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        let review =  input.value
        
        clearBox.addEventListener("click",()=>{
            let items = document.querySelectorAll(".listItems")
            items.forEach((e)=>{
                TaskList.removeChild(e)
                clearBox.classList.remove("clearbox-show")
                notificationSign("Haaha! You Cleared All", "unsuccessful")
            })
            
        })
        
        if (review){
            let coveringList = document.createElement("div");
            coveringList.classList.add("listItems");
            //Input Text Area
            let saveText = document.createElement("input");
            saveText.type = "text";
            saveText.classList.add("listInput");    
            saveText.value = review;
            saveText.setAttribute("readonly", "readonly")

            //Buttons Edit & Delete
            let buttonsAction = document.createElement("div")
            buttonsAction.classList.add("useablebtn")

            let editButton = document.createElement("button")
            editButton.type = "button"
            editButton.textContent = "Edit"
            editButton.classList.add("textimage");
            editButton.style.fontSize = "1.6vh"
            
            let deleteButton = document.createElement("button")
            deleteButton.type = "button"
            deleteButton.textContent = "Delete"
            deleteButton.style.color = "rgb(206, 59, 34)"
            deleteButton.style.fontSize = "1.6vh"

            //Append Action
            coveringList.remove() 
            coveringList.appendChild(saveText);
            coveringList.appendChild(buttonsAction);
            buttonsAction.appendChild(editButton)
            buttonsAction.appendChild(deleteButton)
            TaskList.appendChild(coveringList); 

            //Functinoality box
            notificationSign("Saved!", "success")
            clearBox.classList.add("clearbox-show")
            input.value = ""

            editButton.addEventListener("click",()=>{
               if (editButton.textContent == "Edit"){
                   saveText.removeAttribute("readonly");
                   editButton.textContent = "Save"
               } else {
                saveText.setAttribute("readonly", "readonly");
                editButton.textContent = "Edit"
               }
            })
           

            deleteButton.addEventListener("click",()=>{
                coveringList.remove();
                let items = document.querySelectorAll(".listItems")
                if (items.length === 0 ){
                    clearBox.classList.remove("clearbox-show")
                 }         
            })


        } else {
            notificationSign(" Save the word,  I don't snitch!", "unsuccessful")
        }      
    })
})


let notificationSign = (alarm, action)=>{
    alertinfo.textContent = alarm
    alertinfo.classList.add(`alert-${action}`);

    setTimeout(()=> {
        alertinfo.textContent = "";
        alertinfo.classList.remove(`alert-${action}`)
    }, 1000)
} 

