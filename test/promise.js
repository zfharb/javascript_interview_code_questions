const promise = new Promise((resolve, reject) => {
    let isNameExist = true;

    if(isNameExist) {
        resolve('user name exist');
    } else {

        reject('error')
    }
})

promise.then(result => console.log(result)).catch(() => {
    console.log('error !')
})