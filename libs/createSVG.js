const fs = require('fs');

function createSVG(fileName, data) {
    fs.writeFile(`./examples/${fileName}.svg`, data, (err) => {
        if (err) {
            console.log('Error creating SVG:', err);
            process.exit
        }
        console.log(`Sucessfully created libs/${fileName}.svg!
        Exiting Program!`)
        process.exit
    })
}

module.exports = createSVG;