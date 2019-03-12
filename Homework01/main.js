var todo_input, todo_list, todo_count, todo_clean, dialog_bg, dialog_main;
var todo_idx = 0;
var dialog_idx = 0;
var todo_info = Array();

function init() {
    todo_input = document.getElementById('todo-input');
    todo_list = document.getElementById('todo-list');
    todo_count = document.getElementById('todo-count');
    todo_clean = document.getElementById('todo-clean');
    dialog_bg = document.getElementById('dialog-bg');
    dialog_main = document.getElementById('dialog-main');
    let btn = document.getElementById("dialog-btn");
    todo_input.addEventListener('keyup', event => {
        if (event.keyCode === 13 && event.target.value !== '')  {
            new_item(event.target.value);
            event.target.value = "";
        }
    });
    dialog_bg.onclick = (event) => {
        dialog_bg.style.display = "none";
    }
    dialog_main.onclick = (event) => {
        event.stopPropagation();
    }
    btn.onclick = (event) => {
        let name = document.getElementById("dialog-name").innerHTML;
        let date = document.getElementById("date").value;
        let person = document.getElementById("person").value;
        let cate = document.getElementById("category").value;
        todo_info[dialog_idx] = {"name": name, "date": date, "person": person, "category": cate};
        dialog_bg.style.display = "none";
    }
    update_count();
}

function new_item(todo_string) {
    let li = document.createElement("li");
    li.className = "todo-app__item";
    li.setAttribute("data-checked", "false");
    li.innerHTML = `
        <div class="todo-app__checkbox">
            <input type="checkbox" id="${todo_idx}">
            <label for="${todo_idx}"></label>
        </div>
        <h1 class="todo-app__item-detail">${todo_string}</h1>
        <img src="./img/x.png" class="todo-app__item-x"/>`;
    /* events */
    li.onclick = (event) => {
        click_item(li.children[0].children[0].getAttribute('id'));
    }
    li.children[0].onclick = (event) => {
        event.stopPropagation();
    }
    li.children[0].children[0].onchange = (event) => {
        check_item(event.target);
    }
    li.children[2].onclick = (event) => {
        li.remove();
        update_count();
        event.stopPropagation();
    }
    todo_info[todo_idx] = {"name": todo_string, "date": "", "person": "", "category": ""};
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
function click_item(id) {
    dialog_bg.style.display = "flex";
    let name = document.getElementById("dialog-name");
    let date = document.getElementById("date");
    let person = document.getElementById("person");
    let cate = document.getElementById("category");
    name.innerHTML = todo_info[id].name;
    date.value = todo_info[id].date;
    person.value = todo_info[id].person;
    cate.value = todo_info[id].category;
    dialog_idx = id;
}
