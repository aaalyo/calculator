
let result;
let action;
let screen = '';

function refreshScreen() {
    document.getElementById('screen').innerHTML = screen;
}

function showOnScreen(element) {
    const num = element.innerHTML;
    screen += num;
    refreshScreen();
}
 
function deleteAll () {
    screen = '';
    refreshScreen();
}

function sum() {
    execute();
    action = '+';
}

function minus() {
    execute();
    action = '-';
}

function multiply() {
    execute();
    action = '*';
}

function divide() {
    execute();
    action = '/';
}

function execute() {
    if (screen === '') {
        return;
    }
    if (action === '+') {
        screen = Number(result) + Number(screen);
    }
    if (action === '-') {
        screen = Number(result) - Number(screen);
    }
    if (action === '*') {
        screen = Number(result) * Number(screen);
    }
    if (action === '/') {
        screen = Number(result) / Number(screen);
    }
    refreshScreen();
    result = screen;
    screen = '';
}

    
    

   
