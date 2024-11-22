let buttons = document.querySelectorAll(".colorButton");
function randomcolor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i ++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
buttons.forEach(button => {
    button.addEventListener('click' , () => {
        button.style.color = randomcolor();
    })
});
// ----------------------------------------2 - misol 
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click' , function () {
    if (nameInput.value === '') {
        alert('iltimos ismingizni kiriting')
        console.log('Ism: Bo\'sh');
        return;
    }
    if (emailInput.value === '') {
        alert(`Salom ${nameInput.value}, iltimos emailingizni kiriting!`);
        console.log(`Ism: ${nameInput.value}, Email: Bo'sh`);
        return;
    }
    alert(`Forma muvaffaqiyatli yuborildi! Rahmat, ${nameInput.value}.`);
    console.log(`Ism: ${nameInput.value}, Email: ${emailInput.value}`);
})
// -------------------------------------------3 - misol
let nam1 = document.getElementById('num1');
let nam2 = document.getElementById('num2');
let qoshish = document.getElementById('qoshish');
let ayirish = document.getElementById('ayirish');
let kopaytirish = document.getElementById('kopaytirish');
let natija = document.getElementById('result');
qoshish.addEventListener('click' , function () {
    let num1 = parseFloat(nam1.value);
    let num2 = parseFloat(nam2.value);
    natija.textContent = `natija: ${num1 + num2}`;
})
ayirish.addEventListener('click' , function () {
    let num1 = parseFloat(nam1.value);
    let num2 = parseFloat(nam2.value);
    natija.textContent = `natija: ${num1 - num2}`;
})
kopaytirish.addEventListener('click' , function () {
    let num1 = parseFloat(nam1.value);
    let num2 = parseFloat(nam2.value);
    natija.textContent = `natija: ${num1 * num2}`;
})
// --------------------------------------4 - misol
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
addTaskBtn.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Iltimos, vazifani kiriting!');
        return;
    }
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'O\'chirish';
    deleteBtn.style.marginLeft = '20px';
    deleteBtn.style.color = 'rgb(6, 231, 243)';
    deleteBtn.style.border = 'none';
    deleteBtn.style.backgroundColor = 'black';
    deleteBtn.style.padding = '5px 10px';
    deleteBtn.style.borderRadius = '10px';
    deleteBtn.addEventListener('click', function () {
        taskItem.remove();
    });
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
    taskInput.value = '';
});

// --------------------------------------5 - misol
let soat = document.getElementById('clock');
function clocks() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    soat.textContent = `${hours}:${minutes}:${seconds}`
}
setInterval(clocks , 1000);
clocks();