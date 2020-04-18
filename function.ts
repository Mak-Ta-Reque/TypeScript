function add(x: number, y: number){
    return x + y;
}

let myAdd = function(x: number, y:number){
    return x + y;
};

let z = 100;
function addToZ(x: number, y:number) {
    return x + y + z;
}

console.log(addToZ(1,2))