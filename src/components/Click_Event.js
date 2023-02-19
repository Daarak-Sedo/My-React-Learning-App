function Click_Event(){
    function popUp(){
        alert("Alert Function called")
    }
    return(
        <button onClick={popUp}>Click Me - to Alert</button>   //-------> if we will call Function (as- popUp()) then it will automatically excute function , when browser will start 
    )                                                           //--------> that,s why we will --> Only Function name  (as- PupUp)
}

export default Click_Event