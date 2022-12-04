const div1 = document.getElementById('EmployeesList');

function show_only_active(arr) {
    return arr.filter(el => el.status === true);
}

let active_status;
let max_to_show;
let description_status;

fetch("./settings.json")
.then(res => res.json())
.then(data => {
    active_status = data[0].value;
    max_to_show = data[1].value;
    description_status = data[2].value;
})

const maxNumberToShow = document.getElementById("NumberOfItemsInput");
maxNumberToShow.setAttribute('value', max_to_show)

function setMaxNum() {
    max_to_show = Number(maxNumberToShow.value);
}

fetch("./employees.json")
.then(res => res.json())
.then((data) => {
    if (active_status === true) {
        let activeEmployees = show_only_active(data);
        activeEmployees.map((employees, index) => {
            if (index < max_to_show) {
                let li = document.createElement('li');
                let name = document.createElement('h4');
                let descript = document.createElement('p');
                name.innerHTML = `Name: ${employees.name}`;
                descript.innerHTML = `Description: ${employees.name}`;
                div1.appendChild(li);
                li.appendChild(name);
                if (description_status === true) {
                    li.appendChild(descript);
                } else {
                    let not_available = document.createTextNode('Description: N/A');
                    li.appendChild(not_available);
                }
                let btn = document.createElement('button');
                let btnText = document.createTextNode('Remove');
                btn.appendChild(btnText);
                li.appendChild(btn);
                const rmv = function () {
                    div1.removeChild(li);
                }
                btn.addEventListener('click', rmv)
            }
        })
    } else {
        console.log(data);
    }
})