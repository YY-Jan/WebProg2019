var todo_input, todo_list, todo_count, todo_clean;
var todo_idx = 0;

function init() {
    todo_input = document.getElementById('todo-input');
    todo_list = document.getElementById('todo-list');
    todo_count = document.getElementById('todo-count');
    todo_clean = document.getElementById('todo-clean');
    todo_input.addEventListener('keyup', event => {
        if (event.keyCode === 13 && event.target.value !== '')  {
            new_item(event.target.value);
            event.target.value = "";
        }
    });
    update_count();
}

function new_item(todo_string) {
    let li = document.createElement("li");
    li.className = "todo-app__item";
    li.setAttribute("data-checked", "false");
    li.innerHTML = `
        <div class="todo-app__checkbox">
            <input type="checkbox" id="${todo_idx}" onchange="check_item(this)">
            <label for="${todo_idx}"></label>
        </div>
        <h1 class="todo-app__item-detail"></h1>
        <img src="./img/x.png" class="todo-app__item-x" onclick="this.parentNode.remove(); update_count()"/>`;
    li.children[1].append(todo_string);
    todo_idx++;
    todo_list.appendChild(li);
    update_count();
}

function check_item(checkbox) {
    checkbox.parentNode.parentNode.setAttribute("data-checked", checkbox.checked);
    update_count();
}

function update_count() {
    let lis = Array.from(document.getElementsByClassName("todo-app__item"));
    let len = lis.filter(li => li.getAttribute("data-checked") === "false").length;
    todo_count.innerHTML = len + " left";
    if (lis.length - len === 0)
        todo_clean.style.visibility = "hidden";
    else
        todo_clean.style.visibility = "visible";
}

function change_view(button) {
    let view_mode = button.innerHTML.toLowerCase();
    todo_list.setAttribute("data-view-mode", view_mode);
}

function clear_completed() {
    let lis = Array.from(document.getElementsByClassName("todo-app__item"));
    let completed = lis.filter(li => li.getAttribute("data-checked") === 'true');
    completed.forEach((elem) => {
        elem.remove();
    });
    update_count();
}
