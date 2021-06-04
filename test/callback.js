const greeting = (name) => {
    console.log('hey....' + name + "...This message is shown after 3 seconds");
}
const setTimeout = (callback) => {
    let str = 'john';
    callback(str);
};

setTimeout(greeting);