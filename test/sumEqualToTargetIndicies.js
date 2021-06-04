function sumEqualToTarget(arr, target) {
     var numMap = new Map();
     var indiciesArr = [];
        for (let i = 0; i < arr.length; i++) {
            let  complement = target - arr[i];

            if (numMap.get(complement) != null) {
                numMap.set(arr[i], i);

                if (indiciesArr.find(element => numMap.get(complement) === element)) 
                    {

                    } else {
                        indiciesArr.push(numMap.get(complement));

                    } 


                indiciesArr.push(i);




            } else {

                numMap.set(arr[i], i);
                console.log(numMap);

            }
        }
        return indiciesArr;
    }

console.log(sumEqualToTarget( [-2, 7, 9, 0, 11, 15], 9));