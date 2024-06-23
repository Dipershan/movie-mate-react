import {useState ,  useEffect} from 'react'



  
    // //js
    const Timer  = () =>{
    
        const [isRunning  ,  setIsRunning] =  useState(false);
        const [timer , setTimer] =  useState(0);

        const startAndPasue = () =>{
            setIsRunning(!isRunning);
        };

        const reset =() =>{
            setTimer(0);
        };

        useEffect(() =>{
            let intervalId;
            
            if(isRunning){
                intervalId =  setInterval(()=> setTimer(timer+1) , 1000);
            }
            return () => clearInterval(intervalId);

        } , [isRunning ,  timer]);

 
    return <>    
    <div>
        Timer
        <br />
        {timer}
        <br />
        <button onClick={startAndPasue}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={reset}>Reset</button>
        <br />

        
        
    </div>
    
    </>


};




export default Timer;