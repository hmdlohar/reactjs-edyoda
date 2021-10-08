import StudentList from './StudentList'
const lstStudent = [
    {
        firstName: "Vivek",
        lastName: "Oberoy",
        marks: {
            maths: 65,
            english: 30
        }
    },
    {
        firstName: "Nikunj",
        lastName: "kakadiya",
        marks: {
            maths: 39,
            english: 70
        }
    },
    {
        firstName: "Pankaj",
        lastName: "Lohar",
        marks: {
            maths: 76,
            english: 45
        }
    },
    {
        firstName: "Hamid",
        lastName: "Lohar",
        marks: {
            maths: 40,
            english: 60
        }
    },
    {
        firstName: "Adarsh",
        lastName: "Pandey",
        marks: {
            maths: 80,
            english: 80
        },
    }
]


function MyBody(props) {
    const fullName = "Hamid Lohar"
    return (
        <div className="body">
            <div>
                <a id="link" href="https://google.com">Go to google</a>
            </div>
            <div>Welcome <b>{props.firstName}</b></div>
            <StudentList
                fullName={fullName}
                data={lstStudent}
            />
            <span>This is react world</span>
        </div>
    )
}

export default MyBody;