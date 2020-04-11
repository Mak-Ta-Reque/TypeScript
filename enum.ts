// A friendly way to assign numaric value 

enum Color{
    Red,
    Green = 2,
    Blue,
}

let c: Color = Color.Green;
let r: Color = Color.Red;
console.log(`Green is ${c}`);
console.log(`Red is ${r}`)