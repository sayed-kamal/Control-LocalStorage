// Create Elements
let theInput = document.querySelector('.input'),
    allButtons = document.querySelectorAll('.buttons span'),
    messageContainer = document.querySelector('.Parent');

function showMessage(msg) {
    messageContainer.textContent = msg;
}

function checkItem() {
    let value = theInput.value.trim();
    if (value !== '') {
        let item = localStorage.getItem(value);
        if (item) {
            messageContainer.innerHTML = `The item is: <span>${value}</span>`;
        } else {
            messageContainer.innerHTML = `This item: <span>${value}</span> was not found.`;
        }
    } else {
        showMessage("Input is empty, please enter an item.");
    }
}

function addItem() {
    let value = theInput.value.trim();
    if (value !== '') {
        localStorage.setItem(value, 'Test');
        theInput.value = '';
        theInput.focus();
    } else {
        showMessage("Input is empty, please enter an item.");
    }
}

function deleteItem() {
    let value = theInput.value.trim();
    if (localStorage.getItem(value)) {
        localStorage.removeItem(value);
        messageContainer.innerHTML = `Item <span>${value}</span> has been deleted.`;
        theInput.value = '';
        theInput.focus();
    } else {
        messageContainer.innerHTML = `Item <span>${value}</span> not found in LocalStorage.`;
    }
}

function showItems() {
    if (localStorage.length) {
        messageContainer.innerHTML = '';
        theInput.focus();
        for (let [key] of Object.entries(localStorage)) {
            messageContainer.innerHTML += `<p>${key}</p>`;
        }
    } else {
        messageContainer.textContent = "No items in LocalStorage.";
    }
}

allButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.classList.contains('Check')) {
            checkItem();
        } else if (e.target.classList.contains('Add-Item')) {
            addItem();
        } else if (e.target.classList.contains('Delate-Item')) {
            deleteItem();
        } else if (e.target.classList.contains('Show-Item')) {
            showItems();
        }
    });
});
