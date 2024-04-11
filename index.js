const {Shape, Circle, Triangle, Square} = require('./libs/shapes');
const inquirer = require('inquirer');
const readline = require('readline');
const questions = require('./libs/questions')
const pickShape = require('./libs/shape_helper')
const createSVG = require('./libs/createSVG');

//async function to call our prompts on startup, uses the prompt inputs to create a new shape object from our class, and sets its colors for text and shape, as well as text. 
// Then writes it to an SVG file.
async function main() {
    const data = await inquirer.prompt(questions)
    console.log(data);
    const shape = pickShape(data.shape);
    shape.setText(data.text);
    shape.setColor(data.shapecolor);
    shape.setTextColor(data.textcolor);
    const template = shape.render();
    const fileName = `${shape.text}_${shape.constructor.name}`;
    createSVG(fileName, template);
}

console.log(`
||| Welcome to the SVG Shape Logo Creator!   |||
|||      To Exit the program press ESC       |||
||| Use a # before your hexnumber for colors |||
`)
main()

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
};

process.stdin.on('keypress', (chunk, key) => {
if (key && key.name == 'escape')
    process.exit();
});