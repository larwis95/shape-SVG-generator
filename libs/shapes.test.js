const {Shape, Circle, Triangle, Square} = require('../libs/shapes');

describe('Shapes', () => {

    describe('Circle', () => {
        it('The render method should return the correct sting based on input', () => {
            const shape = new Circle('blue', 'SVG')
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
            const shape = new Triangle('blue', 'SVG')
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
            const shape = new Square('blue', 'SVG')
            const results = shape.render();
            expect(results).toEqual(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="75" y="33" height="150"  fill="blue"/>
    <text x="150" y="125" font-size="50" text-anchor ="middle" fill="white" stroke="black">SVG</text>
</svg>
`);
        });
    });
});