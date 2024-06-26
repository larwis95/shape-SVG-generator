const {Shape, Circle, Triangle, Square} = require('../libs/shapes');

// Unit test for each shape class's render method. Will pass if the input matches the output.
describe('Shapes', () => {

    describe('Circle', () => {
        it('The render method should return the correct sting based on input', () => {
            const shape = new Circle()
            shape.setColor('blue');
            shape.setText('SVG');
            shape.setTextColor('white');
            const results = shape.render();
            expect(results).toEqual(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="blue"/>
    <text x="150" y="125" font-size="60" text-anchor ="middle" fill="white" stroke="black">SVG</text>
</svg>
`);
        });
    });

    describe('Triangle', () => {
        it('The render method should return the correct string based on inputs', () => {
            const shape = new Triangle()
            shape.setColor('blue');
            shape.setText('SVG');
            shape.setTextColor('white');
            const results = shape.render();
            expect(results).toEqual(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,24 60,160 249, 160"  fill="blue"/>
    <text x="150" y="125" font-size="50" text-anchor ="middle" fill="white" stroke="black">SVG</text>
</svg>
`);
        });
    });

    describe('Square', () => {
        it('The render method should return the correct string based on inputs', () => {
            const shape = new Square()
            shape.setColor('blue');
            shape.setText('SVG');
            shape.setTextColor('white');
            const results = shape.render();
            expect(results).toEqual(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="75" y="33" height="150" width="150" fill="blue"/>
    <text x="150" y="125" font-size="50" text-anchor ="middle" fill="white" stroke="black">SVG</text>
</svg>
`);
        });
    });
});