function singleLoopSorting() {
    let arr = [1,-1,10,8];
        for (let i = 1; i < arr.length; i++) {
            let j = i - 1;

            if (arr[i] < arr[j]) {
                   
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                i = 1;
    
            }
    
        }
    console.log(arr);
}

singleLoopSorting();