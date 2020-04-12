function printLabel(labelobject : {label: string}){
    console.log(labelobject.label);
}

let myObject = {label: "Size of object 10", size: 10}

printLabel(myObject);   


console.log("Interface in long hand");

interface LabledValue{
    label: string;
}
function printInterfaceLabel(labelobject : LabledValue){
    console.log(labelobject.label);
}



// Readonly properties

// Some property should be modifiesd when object are first created.

interface Point {
    readonly x: number; 
    readonly y: number
}

let p1: Point = {x:0, y:0}
// p1.x = 1; throws an error

// It follows the same way for arrays 


let a: number [] = [1,2,3,4,5]
let ro: ReadonlyArray<number> = a;

//ro.push(6);
//ro.length = 0;

//a = ro;

// Property assertion

a = ro as number[]
console.log(a);

// read only vs constant


// Function type 

interface SearchFunc{
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = function ( source: string, subString: string) {
    let result = source.search(subString)
    return result > -1;
}

mySearch = function(src, sub){
    let result = src.search(sub);
    return result > -1;
}


// Indexable types


interface StringArray {
[index: number]: string
}

let myArray: StringArray
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

console.log(myStr);

