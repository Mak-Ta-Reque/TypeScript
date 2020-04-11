// A friendly way to assign numaric value 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var r = Color.Red;
console.log("Green is " + c);
console.log("Red is " + r);
