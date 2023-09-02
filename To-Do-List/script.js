
const inputText = document.getElementById("input-text");
const taskList = document.getElementById("task-List");

function addTask() {
    if (inputText.value === "") {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        li.appendChild(span);
    }

    inputText.value = "";
    saveData();
}

taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showData() {
    taskList.innerHTML = localStorage.getItem("data");
}
showData();