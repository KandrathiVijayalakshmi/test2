const arr=[1,2,3,4,5];

const first = arr [0];
const rest = arr.slice(1);

console.log("first element:",first);
console.log("rest of the elements:",rest);

const [first1, ...rest1] = [1,2,3,4,5];
console.log("first element:", first1);
console.log("rest of the elements:",rest1);

function sum(...numbers) {
    let total = 0;
    for (let n of numbers) {
        total += n;
    }
    return total;
}

console.log(sum(2,4));
console.log(sun(1,2,3,4));


////ex2

function greet (message, ...names){
    console.log(message);
}