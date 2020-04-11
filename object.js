function printPoint(points) {
    console.log("x = " + points.x + ", y = " + points.y);
}
function printName(x) {
    console.log("Hello, " + x.name);
}
var obj = {
    x: 0,
    y: 0,
    name: "Origin"
};
printPoint(obj);
printName(obj);
