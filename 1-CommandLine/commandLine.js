const radius = process.argv[2];

const circleArea = (radius) => {
    return Math.PI * Math.pow(radius,2);
}

console.log(circleArea(radius));
