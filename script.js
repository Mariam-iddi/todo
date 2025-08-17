
function addTask(){
    //local variables
    const input = document.getElementById("taskInput")
    const taskText = input.value.trim()

    if(taskText === ""){
        alert("Please enter a task!")
        return;
    }

    const li = document.createElement("li")
    li.textContent= taskText

    //toggle complete 
    li.addEventListener("click", () =>{
        li.classList.toggle("completed")
    });


    //delete button
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent= "Delete"
    deleteBtn.onclick = () => li.remove();


    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    // input.Value

    input.value = ""; // clear input field



}