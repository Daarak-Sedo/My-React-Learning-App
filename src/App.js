import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Veribal_Or_Heraarki from "./components/Veribal_Or_Heraarki";
import Click_Event from "./components/Click_Event";
import Props_In_Functional_Componant from "./components/Props_In_Functional_Componant";
import Props_In_Class_Componant from "./components/Props_In_Class_Componant";
import UseState_4_Show_And_Hide_Toggle from "./components/UseState_4_Show_And_Hide_Toggle";
import Form_Page from "./components/Form_Page";
import If_Else_Conduction from "./components/If_Else_Conduction";
// import Dog from "./components/Dog";
import Style_or_css_type_in_react from "./components/Style_or_css_type_in_react";
import Handle_array_with_list_in_react from "./components/Handle_array_with_list_in_react";

function App() {
  // function passingOrSending_function_as_a_props(){
  //   alert("passing/sending Function from Parent to child function As a Props")
  // }
  return (
    <div>
      <h1>React Tutorial </h1>
      <p>This is My 1st App</p>
      <Veribal_Or_Heraarki></Veribal_Or_Heraarki>   //Reciving data in Herraki/var, before Return
      <Click_Event></Click_Event>
      <Props_In_Functional_Componant name={"Aman"} email="aman@gmail.com"></Props_In_Functional_Componant>     // Passing data(Props/parametar) from 1 components to 2nd components(Parent to child Node)
      <Props_In_Class_Componant name={"Bhuwan"} ></Props_In_Class_Componant>
      <UseState_4_Show_And_Hide_Toggle></UseState_4_Show_And_Hide_Toggle>
      <Form_Page></Form_Page>
      <If_Else_Conduction></If_Else_Conduction>
      {/* <Dog></Dog> */}
      <Style_or_css_type_in_react></Style_or_css_type_in_react>
      <Handle_array_with_list_in_react></Handle_array_with_list_in_react>
    </div>
  );
}

export default App;
