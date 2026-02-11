const arr = [1,2,3];
console.log("original array",arr);

const newArr = [5,6,arr[0],arr[1],arr[2]];
console.log("new array (before spread operator)",newArr);

const newArr1=[5,6, ...arr];




const arr1=[1,2,3];
const arr2=[4,5,6];
const combined = [...arr1, ...arr2];
console.log("combined array:",combined); //[1,2,3,4,5,6]

function sum(a,b,c){
    return a+b+c;
}

const  nums = [1,2,3]
const result=sum(...nums);
console.log("result of sum:",result);
