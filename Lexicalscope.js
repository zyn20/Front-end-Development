function outer
{
    var username ='Ali';
     //pass can't be accessed  
    function inner
    {
        //name can be accessed here
        //pass can't be accessed  
        function innermost
        {
            var pass='123';
            //here we can access both username and pass 
        }

    }
}
//But it doesn't work backward to its outer function, meaning that the variable pass cannot be accessed by its outer functions.
