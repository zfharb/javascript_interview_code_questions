function factorial(n) {

    var total = 1;

    for (let i = 0; i < n; i++){
        total = total * (n - i);  
    }

    console.log(n + '! = ' + total);

}

factorial(3);