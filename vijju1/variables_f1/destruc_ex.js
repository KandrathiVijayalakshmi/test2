const user ={
    name: 'vijju',
    role: 'tester',
    experience: '0',
    location: 'hyd'
};
const {name ,role, ...otherDetails } = user;

console.log(name);
console.log(role);
console.log(otherDetails);