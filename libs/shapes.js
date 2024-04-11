class Shape {};

class Circle extends Shape {};

class Triangle extends Shape {};

class Square extends Shape {};

module.exports = {Shape, Circle, Triangle, Square}

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
};

//when escape is pressed exit the app
process.stdin.on('keypress', (chunk, key) => {
if (key && key.name == 'escape')
    process.exit();
});