const {Shape, Circle, Triangle, Square} = require('../libs/shapes');

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