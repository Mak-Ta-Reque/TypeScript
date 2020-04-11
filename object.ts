
interface Pointlike {
    x: number;
    y: number;
}

interface Named {
    name: string;
}

function printPoint(points: Pointlike) {
    console.log("x = " + points.x + ", y = " + points.y);
}

function printName(x: Named) {
    console.log("Hello, " + x.name);
}

const obj = {
    x: 0,
    y: 0,
    name: "Origin"
};

printPoint(obj);
printName(obj);