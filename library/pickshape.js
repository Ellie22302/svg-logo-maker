const { Circle, Triangle, Square } = require('./shapes');

function setShapea(data) {

    if (data.shape === 'Circle') {
        let userShape = new Circle (data.text, data.textColor, data.shapeColor)
        return userShape.render()
    }

    if (data.shape === 'Square') {
        let userShape = new Square (data.text, data.textColor, data.shapeColor)
        return userShape.render()
    }

    if (data.shape === 'Triangle') {
        let userShape = new Triangle (data.text, data.textColor, data.shapeColor)
        return userShape.render()
    }
};

module.exports = setShapea;