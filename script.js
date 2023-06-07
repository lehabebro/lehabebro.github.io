let taskinput = document.querySelector('.task-input__value'),
    taskbtn = document.querySelector('.task-input__btn'),
    tasklist = document.querySelector('.tasklist'),
    taskerase = document.querySelector('.task-input__del');

    if (localStorage.getItem) {
        tasklist.innerHTML =localStorage.getItem('A')
    }
function taskadd() {
    let taskli = `
                <li class="task-listitem">
                    <span class="task-listtitle">${taskinput.value}</span>
                    <div class="task-listright">
                        <span class="task-listdate">29.4.23</span>
                    </div>
                </li>`;
    if (taskinput.value != "") {
        tasklist.insertAdjacentHTML('beforeend', taskli);
        taskinput.value = "";
    }
    tasksave();
}
function taskdel(event) {
     if (event.target.classList == 'task-listtitle') {
        event.target.closest('.task-listitem').remove();
     }
     tasksave();
}
function taskera(){
    let taskitem = document.querySelectorAll('.task-listitem');
    for(let i of taskitem){
       i.remove();
    }
    tasksave();
}
function tasksave(){
    localStorage.setItem('A',tasklist.innerHTML);
}
taskbtn.addEventListener('click', taskadd);
tasklist.addEventListener('click', taskdel);
taskerase.addEventListener('click', taskera);
