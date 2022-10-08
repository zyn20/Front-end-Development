  function optgenrator()
    {
      var digits='0123456789';
      let otp='';
      for(let i=0;i<6;i++)
      {
        otp=otp+digits[Math.floor(Math.random()*10)];

      }
      return otp;
    }
    let result=optgenrator();
    console.log(result);
