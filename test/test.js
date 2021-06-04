import { util } from "chai";
import {removeConsecutiveDuplicate} from '../utilities/helper.js';

describe("interview test framework", function() {
    it("Single loop sort algorithm", function() {
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
  
    });

    it("Remove conssecutive duplicate from string", function() {
        let str = 'dbaaadbccc';
        
        console.log(removeConsecutiveDuplicate(str));
  
    });

    it("Remove conssecutive duplicate from string", function() {
        let str = 'xyyzyzyxyz';
        let arr = ['x','y','z'];
        let arr2 = [...str];
        
        console.log(arr2);
  
    });

    it("JavaScript map function", function() {
        const myAwesomeArray = [5, 4, 3, 2, 1]

        console.log(myAwesomeArray.map(x => x * x))
  
    });

    it("JavaScript foreach function", function() {
        const myAwesomeArray = [5, 4, 3, 2, 1]

        myAwesomeArray.forEach(x => console.log(x))
  
    });

    it("Accidental global variable", function() {
        function foo() {
            let a;
            var b = 1;
            a = b;
            a++;
            return a;
          }
          
          foo();
          console.log(typeof a); // => ???
          console.log(typeof b);
  
    });
    
    it("reverse string recursivly", function() {
        let strg = 'Sony is going to introduce Internet TV soon'

        function reverseRecursively(str) {
            if (str.length < 2) {
                return str;
            }
    
            return reverseRecursively(str.substring(1)) + str.charAt(0);
    
    
          }
          
          reverseRecursively(strg);
          console.log( reverseRecursively(strg)); 
          let reverseString =  reverseRecursively(strg);
          console.log( reverseRecursively(reverseString)); 


  
    });


    it("reverse string", function() {
        let str = 'bloomberg'
        
        console.log(str.split('').reverse().join('')); 


  
    });

    it("reverse string", function() {
        let str = 'bloomberg'
        let reversed = '';
        debugger;
        for (let character of str) {
            reversed = character + reversed;

        }
        console.log(reversed);  
    });

    it.only("reverse integer", function() {
        let n = -951;

        const reversed = n.toString().split('').reverse().join('');

        
        console.log(parseInt(reversed) * Math.sign(n));  
    });   
  });