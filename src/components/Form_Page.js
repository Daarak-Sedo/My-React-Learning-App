import React from "react";

function Form_Page() {
 
    return (
        <div>
            <h1>Form In React Js</h1>

            <form>
                <input type="text" placeholder="enter name"></input>
                <br /> <br />

                <select>
                    <option>Select Option</option>
                    <option>Marvel</option>
                    <option>KGF</option>
                </select>

                <br /> <br />

                <input type="checkbox"></input> <span>Accept Terms and Conduction</span>
                
               
                <br /> <br />

                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Form_Page;
