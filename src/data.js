window.computeUsersStats = (users, progress, courses) => {
    console.log(users, progress, courses);
    let students = users.filter(objUser => objUser.role === 'student');
    
    const calcPercent = student => {
        let count = 0;
        courses.forEach(nameCourse => {
        const progressUser = progress[student.id];
        if(progressUser.hasOwnProperty(nameCourse)) {
            count +=progressUser[nameCourse].percent;
        };
        });
        console.log(count)
       return(count/ (courses.lenght));
    };

    const calcStats = (student, type) => {
        let excCompleted = 0;
        let excTotal = 0;
        let scoreSum = 0;
        let scoreAvg = 0; 

        courses.forEach((nameCourse)=> {
        const progressUser = progress[student.id];
            if(progressUser.hasOwnProperty(nameCourse)){
            const units = Object.values(progressUser[nameCourse].units);
        console.log(units)   
        units.forEach((objectUnit) => {
            const parts = Object.values(objectUnit.parts);
      console.log(parts);

 switch (type) {
     case 'practice':
     const exercises = parts.filter(objParts => objParts.type === 'practice' && objParts.hasOwnProperty('exercises'));
     console.log(exercises);
     exercises.forEach((objectExc) => {
         excTotal += exercises.lenght;
     excCompleted += objectExc.completed;
           })  
         break;
    case 'read':
         
         break;
    case 'quiz':
         
         break;    
 
     default:
         break;
 }
   })
        };
        })
   let result = {
      total : excTotal,
      completed: excCompleted,
      percent : excCompleted * 100/excTotal
        };
        if(type === 'quiz') {
        result.scoreSum = scoreSum;
        result.scoreAvg = scoreAvg
        }
     return result;
     console.log(result)
    };

    students = students.map(objStudents =>{    
    const object = {
        name :objStudents.name,
     stats : {
        percent :calcPercent(objStudents),
        exercises :calcStats(objStudents, 'practice'),
     }
    };
    return object
    })   
    console.log(students) 
}

window.sortUsers= (users,orderBy, orderDirection) => {

}


window.filterUsers= (users,search) => {

}

window.processCohortData = (options) => {
const courses= Object.keys(options.cohort.coursesIndex);
let students2 = computeUsersStats(options.cohortData.users,options.cohortData.progress,courses)
console.log(students2)
return students2;
}