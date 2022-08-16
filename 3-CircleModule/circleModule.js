const radius = process.argv[2];

const circleArea = (radius) => {
    return Math.PI * Math.pow(radius,2);
}

const circleCircumference = (radius) => {
    return 2 * Math.PI * radius;
}

module.exports = {circleArea, circleCircumference}
