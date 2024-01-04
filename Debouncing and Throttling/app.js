let counter = 0; // Declares a variable 'counter' and initializes it to 0


//For this to type mayur it will make atmost 5 request
const getData = () => {
    // Defines a function 'getData' using arrow function syntax
    console.log("Fetching Data ....", counter++); 
    // Logs a message to the console and increments 'counter' after logging
}


///Improved Using tge Debouncing 
//this will take only one network call

const debounce=function(fn,delay){
    let timer;

    return function() {
        clearTimeout(timer);
     timer=setTimeout(()=>{
            getData()
        },delay)
    }
}
 
const betterData=debounce(getData,300);
