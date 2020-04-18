interface ClockConstructor{
    new (hour: number, minute: number);
}

interface ClockInterface{
    tick(): any;
}

const myClock: ClockConstructor = class myClock implements ClockInterface{
    construct(h:number, m: number){}
    tick(){
        console.log("tick tick")
    }
}