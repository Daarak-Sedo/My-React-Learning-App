function Handle_array_with_list_in_react() {
    //    let students=["aman","bhuwan","chatur","deepak"]     // WE cant store data in key value pair in array

    let students = [
        { name: "amait", email: "Anail@gmail.com", contact: 896 },
        { name: "bhuwan", email: "Bhuwan@gmail.com", contact: 583 },
        { name: "chatur", email: "Chatur@gmail.com", contact: 696 }
    ]

    return (
        <div className="App">
            <h1>Handle_array_with_list_in_react</h1>
            {
                students.map((data) =>  //------- Rect me Only - Map() hi use krenge , For loop use nhi karenge
                    //  <h1>Name is :{data.name}, {data.email}</h1>    //by - normal Mathod/view
                    <table border="1" align="center">
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.contact}</td>
                        </tr>
                    </table>
                )
            }

        </div>
    )

}


export default Handle_array_with_list_in_react