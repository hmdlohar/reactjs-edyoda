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

function printData() {
    // for(let student of lstStudent){
    //     console.log(`${student.firstName} ${student.firstName} | ${student.marks.english} | ${student.marks.maths}`)
    // }
    console.table(lstStudent)
}

function calculateTotal() {
    return lstStudent.map(student => {
        return { ...student, totalMarks: student.marks.english + student.marks.maths };
    })
}

function printStudentWithHighestMarks() {
    const studentListWithTotals = calculateTotal();
    const student = studentListWithTotals.reduce((prev, student) => {
        if (prev === undefined)
            return student;
        if (student.totalMarks > prev.totalMarks)
            return student;
        else
            return prev;
    }, undefined)

    console.log(student, "He have highest marks")
}

function findTotalOfAll() {
    const studentListWithTotals = calculateTotal();
    const totalMarksOfAll = studentListWithTotals.reduce((prev, student) => {
        return prev + student.totalMarks
    }, 0)
    console.log(totalMarksOfAll, "Total marks of all student. ")
}

function findAllFailedStudent() {
    return lstStudent.filter(student => {
        return student.marks.english < 40 || student.marks.maths < 40
    })
}

function findVivek() {
    return lstStudent.find(student => {
        return student.firstName == 'Vivek'
    })
}


function removePankaj() {
    const indexOfStudentToRemove = lstStudent.findIndex(student => {
        return student.firstName == 'Pankaj'
    })
    console.log(indexOfStudentToRemove, "Remove this index")
    lstStudent.splice(indexOfStudentToRemove, 1);
    console.table(lstStudent)
}

function removePankaj2() {
    console.table(lstStudent.filter(student => student.firstName != 'Pankaj'))
}