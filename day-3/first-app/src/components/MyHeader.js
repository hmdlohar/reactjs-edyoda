// MyHeader props is key-value pair

export default function MyHeader(props) {
    console.log(props.lastName,"Props to my header")
    return (
        <header className="header">
            <div>Logo </div>
            <div style={{ color: 'white' }}>
                {props.firstName} {props.lastName}
                <img src={props.imgURL} />
            </div>
            <div>
                <ul className="menu">
                    <li>Home</li>
                    <li>Project</li>
                    <li>Other menu</li>
                </ul>
            </div>
        </header>
    )
}
