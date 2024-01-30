//Object Manipulation

//given object
const students = [
    {
        name: 'Alice',
        score: 85
    },
    {
        name: 'Bob',
        score: 60
    },
    {
        name: 'Charlie',
        score: 92
    },
    {
        name: 'David',
        score: 75
    }
]

//function that returns the array of names with score grreater than threshold
function getHighScorers(stuArr, threshold) {

    const highScorersArr = stuArr.filter(student => student.score > threshold);

    const highScorerNames = highScorersArr.map(student => student.name);

    return highScorerNames;
}

//calling te function
const highScorers = getHighScorers(students, 70);

console.log(highScorers);