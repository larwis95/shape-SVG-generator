const {Shape, Circle, Triangle, Square} = require('../libs/shapes');

// Function to create a new class based on the shape the user chose.
function pickShape(shape) {
    switch (shape) {

        case 'Circle': 
            return new Circle();

        case 'Triangle':
            return new Triangle();

        case 'Square':
        default:
            return new Square();
        
    }
}

module.exports = pickShape;