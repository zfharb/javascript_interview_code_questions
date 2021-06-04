function reversestr(str) {

let reversed = '';
for (let character of str) {
    reversed = character + reversed;
    debugger;

}
console.log(reversed); 

}


reversestr('bloomberg');

// module.exports = reversestr;