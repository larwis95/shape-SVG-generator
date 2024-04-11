// Array to hold our prompt's. Includes the questions, type, message, and a function to validate the response.
const questions = [
    {
        type: 'input',
        message: 'Enter up to 3 characters for your logo.',
        validate: (input) => {
            if (input.length > 3) {
                console.log(`
                You can only have up to 3 characters!`);
                return false;
            }
            else if (input.length < 1) {
                console.log(`
                Please enter at least 1 character`)
                return false;
            }
            else {
                return true;
            }
        },
        name: 'text'
    },
    {
        type: 'input',
        message: 'Enter either a color name or hexadecimal value for your text.',
        validate: (input) => {
            if (input.length === 0) {
                console.log(`
                Please enter a color name or hexadecimal value.`);
                return false;
            }
            else {
                return true;
            }
        },
        name: 'textcolor'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape from the list',
        choices: ['Circle', 'Triangle', 'Sqaure']
    },
    {
        type: 'input',
        message: 'Enter either a color name or hexadecimal value for your shape.',
        validate: (input) => {
            if (input.length === 0) {
                console.log(`
                Please enter a color name or hexadecimal value.`);
                return false;
            }
            else {
                return true;
            }
        },
        name: 'shapecolor'
    }
]

module.exports = questions;