const nameInput = document.getElementById('nameInput');
const addNameButton = document.getElementById('addNameButton');
const namesList = document.getElementById('namesList');
const removeNameInput = document.getElementById('removeNameInput');
const removeNameButton = document.getElementById('removeNameButton');

const names = [];

function renderNames() {
    const ul = document.createElement('ul');
    namesList.innerHTML = '';
    names.forEach((name, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${name} <button data-index="${index}" class="removeNameButton">Borrar</button>`;
        ul.appendChild(li);
    });
    namesList.appendChild(ul);
}

function addName() {
    const newName = nameInput.value.trim();
    if (newName) {
        names.push(newName);
        renderNames();
        nameInput.value = '';
    }
}

function removeName(index) {
    names.splice(index, 1);
    renderNames();
}

addNameButton.addEventListener('click', addName);
namesList.addEventListener('click', function (event) {
    if (event.target.classList.contains('removeNameButton')) {
        const index = event.target.getAttribute('data-index');
        removeName(index);
    }
});

removeNameButton.addEventListener('click', function() {
    const nameToRemove = removeNameInput.value.trim();
    if (nameToRemove) {
        const index = names.indexOf(nameToRemove);
        if (index !== -1) {
            removeName(index);
        }
        removeNameInput.value = '';
    }
});
