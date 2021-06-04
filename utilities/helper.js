export function removeConsecutiveDuplicate(str) {

    if ( str.length <= 1 )
    {
        return str;
    } 
    
    if( str.substring(1,2) === str.substring(0,1))
    {
        let count=1;

        for (let x=0;x <str.length;x++) {

            // console.log(str.substring(x,x+1));
            // console.log(str.substring(x+1,x+2));
            if ( str.substring(x,x+1) === str.substring(x+1,x+2)) {
                count++;
                // console.log('Im in the first if');
                // console.log(count);
            }
            else if (str.substring(x,x+1) != str.substring(x+1,x+2)){
                break;
            }
        }
        if (count > 0) {
            return removeConsecutiveDuplicate(str.substring(count));

        } else{
            return str.substring(0,1) + removeConsecutiveDuplicate(str.substring(1));        }
    }

    else{
        return str.substring(0,1) + removeConsecutiveDuplicate(str.substring(1));
    } 

}


