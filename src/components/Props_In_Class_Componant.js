import React from "react";

class Props_In_Class_Componant extends React.Component {
  render() {
   // console.log(this.props);
    return (
      <h1 style={{ color: "blue" }}>
        Reciving data from Props in Class Component : {this.props.name}{" "}
      </h1>
    );
  }
}

export default Props_In_Class_Componant;
