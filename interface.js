function printLabel(labelobject) {
    console.log(labelobject.label);
}
var myObject = { label: "Size of object 10", size: 10 };
printLabel(myObject);
console.log("Interface in long hand");
function printInterfaceLabel(labelobject) {
    console.log(labelobject.label);
}
var p1 = { x: 0, y: 0 };
// p1.x = 1; throws an error
// It follows the same way for arrays 
var a = [1, 2, 3, 4, 5];
var ro = a;
//ro.push(6);
//ro.length = 0;
//a = ro;
// Property assertion
a = ro;
console.log(a);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log(myStr);
