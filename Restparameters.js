console.warn("Rest Operators");

//suppose we dont know about number of parameter to be passed in the function then we can use the rest operators
      //create the array of that arguments or parameters 
      function additon(...numberofargs)
      {
        let sum=0;
        for(const arg of numberofargs)
        {
            sum+=arg;
        }
        return sum;
      }
      const s=additon(1,2,3,4,5);
      console.log(s);
