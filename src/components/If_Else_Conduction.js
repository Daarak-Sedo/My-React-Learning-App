import { useState } from "react"

function If_Else_Conduction(){

    let[loggedIn,setLoggedIn]=useState(false)

    if(loggedIn){
        return(
            <h1>Welcome Anil</h1>
        )
    }else{
        return(
            <h2>Welcome Guest : Bhuwan</h2>
        )
    }
}


              //2nd Mathod-   for 2 conduction ----------------------->
// return(
//     {loggedIn}? <h1>Welcome Anil</h1> : <h1>Welcome Guest Bhuwan</h1>
// )

         //---------------> for 3 Conduction----------------------->
// return(
//     <div>
//     { loggedIn===1? <h1>welcome user 1</h1> : loggedIn==2? <h1>welcome user 2</h1> :<h1>welcome user 3</h1>
//     }
//     </div>
// )


export default If_Else_Conduction