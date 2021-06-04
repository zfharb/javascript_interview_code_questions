var highestFrequency = (array) => {
    var occurenceStored = {};
    for (var i = 0; i < array.length; i++){
      
      if (occurenceStored[array[i]]){
        occurenceStored[array[i]] = occurenceStored[array[i]]+1;
      } else{
          occurenceStored[array[i]]=1;
      }
    }
  
    console.log(occurenceStored);
  }

  highestFrequency(['a', 'a', 'c', 'z', 'c', 'c'])