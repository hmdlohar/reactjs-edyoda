function StudentList(props) {
    console.log("props", props)
    return (
        <div>
            <table border="1" cellSpacing="0" style={{ width: '100%', padding: '20px' }}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>English</th>
                        <th>Math</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item) => {
                        return (
                            <tr key={item.firstName}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.marks.english}</td>
                                <td>{item.marks.maths}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


export default StudentList;