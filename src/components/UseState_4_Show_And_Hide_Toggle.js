// import React from "react"              // we can Use- anyone ( React and UseState )
import { useState } from "react"   

function UseState_4_Show_And_Hide_Toggle(){

  let [status,setStatus]=useState(false)        //Default false - means Hide
                                                //we can write also- React.useState()  ,-when we will import react in top 
    return(
     <duv>
        {
            status?  <h1 style={{color:"yellow"}} > Show And Toggle (Button) </h1> :null
        }
          <h1>Click the Below Button to Show & Hide (Button/Contant)</h1>
        <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}  style={{background:"green"}}>Show</button>
     </duv>
   )

}

export default UseState_4_Show_And_Hide_Toggle