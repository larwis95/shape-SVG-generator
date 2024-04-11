const shapes = require('./libs/shapes');
const inquirer = require('inquirer');
const readline = require('readline');
const {Shape, Circle, Triangle, Square} = shapes;

function main() {

}

main()

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
};

//when escape is pressed exit the app
process.stdin.on('keypress', (chunk, key) => {
if (key && key.name == 'escape')
    process.exit();
});