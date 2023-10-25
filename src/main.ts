import {Car} from "./Car.ts";

function sumUp(a: number, b: number): number {
    return a + b;
}

const name: string = "Peter";
const pi: number = 3.14

const one: boolean = true;
const two: boolean = false;
const three: boolean = true;


if ((one && two) || (one && three) || (two && three)) // beide müssen true sein, damit gesamtausdruck true wird
if (one || two) // einer der beiden muss true sein, damit gesamtausdruck true wird

        function getCar(car: Car): Car {
            return car;
        }

type mathOperation = (a: number, b: number) => number;

const add: mathOperation = (a: number, b: number) => a + b;
const sub: mathOperation = (a: number, b: number) => a - b;

console.log(getCar({
    id: "1",
    brand: "VW",
    hasTuev: true,
    color: "blue"
}))

const sumUp2 = (a: number = 1, b: number = 2): number => a + b;

console.log(sumUp2())

const sayHello = (): void => {
    console.log("Hello World!");
}

const arr: number[] = [10, 20, 30, 21, 246, 346, 12, 11, 9, 99, 100];

const onlyEvenNumbers: number[] = arr
    .filter((num) => num % 2 === 0)
    .map(num => num * 2);

console.log(onlyEvenNumbers)
