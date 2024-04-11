class Shape {
    
    render() {
        console.log('Please select a shape first!');
    }

    setTextColor(color) {
        this.textColor = color;
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }
};

class Circle extends Shape {

    render() {
        
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.color}"/>
    <text x="150" y="125" font-size="60" text-anchor ="middle" fill="${this.textColor}" stroke="black">${this.text}</text>
</svg>
`;
    }
};

class Triangle extends Shape {

    render() {

        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,24 60,160 249, 160"  fill="${this.color}"/>
    <text x="150" y="125" font-size="50" text-anchor ="middle" fill="${this.textColor}" stroke="black">${this.text}</text>
</svg>
`;
    };
};

class Square extends Shape {
    
    render() {

        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="75" y="33" height="150" width="150" fill="${this.color}"/>
    <text x="150" y="125" font-size="50" text-anchor ="middle" fill="${this.textColor}" stroke="black">${this.text}</text>
</svg>
`;
    };
};

module.exports = {Shape, Circle, Triangle, Square}

