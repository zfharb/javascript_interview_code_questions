var globalVariable;
function scope() {
    let str = 'local variable';
    globalVariable = 'global variable';

    console.log(str); 
}

scope();
console.log(globalVariable)