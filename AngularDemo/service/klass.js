var student = require('./student')
var teacher = require('./teacher')

teacher.add('bert')

function add(teacherName, students){
    teacher.add(teacherName)
    
    students.forEach(function(item, index){
        student.add(item)
        console.log(index)
    })
}

exports.add = add;