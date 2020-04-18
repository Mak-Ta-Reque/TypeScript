function buildName(firstNmae) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstNmae + " " + restOfName.join(" ");
}
var employeeName = buildName("JOseph", "Samuel", "Lucas", "MacKibzie");
console.log(employeeName);
