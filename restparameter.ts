
function buildName(firstNmae: string,  ...restOfName: string[]){
    return firstNmae + " " + restOfName.join(" ");
}
let employeeName = buildName("JOseph", "Samuel", "Lucas","MacKibzie");

console.log(employeeName);