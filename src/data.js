window.computeUsersStats = (users, progress, courses) => {
    console.log(users, progress, courses);
    let students = users.filter(objUser => objUser.role === 'student');
    console.log(students)

    const calcPercent = student => {
        let count = 0;
        courses.forEach(course => {
          const progressUser = progress[student.id];
          if(progressUser.hasOwnProperty(course)) {
            console.log(progressUser)
            count += progressUser[course].percent;
          };
        });
        console.log(count)
       return(count/ courses.length);
    };

    const calcStats = (students, type) => {
        let completed = 0;
        let total = 0;
        let scoreSum = 0;
        let scoreAvg = 0; 

        courses.forEach((course)=> {
          const progressUser = progress[students.id];
          if(progressUser.hasOwnProperty(course)){
            const units = Object.values(progressUser[course].units);
             console.log(units)   
            units.forEach((objectUnit) => {
              const parts = Object.values(objectUnit.parts);
              console.log(parts);

              switch (type) {
                case 'practice':
                const exercises = parts.filter(objParts => objParts.type === 'practice' && objParts.hasOwnProperty('exercises'));
                console.log(exercises);
                exercises.forEach((objectExc) => {
                  total += exercises.length;
                  completed += objectExc.completed;
        
                })  
                break;
                case 'read':
                const reads = parts.filter(objParts => objParts.type === 'read');
                console.log(reads);
                reads.forEach((objectRead) => {
                  total += read.length;
                  completed += objectRead.completed;
                })  
         
                break;
                case 'quiz':
                const quiz = parts.filter(objParts => objParts.type === 'quiz');
                console.log(quiz);
                quiz.forEach((objectQuiz) => {
                  total += quiz.length;
                  completed += objectQuiz.completed;
                  // scoreSum += 
                  // scoreAvg +=
                })
                break;    
 
                default:
                break;
              }
            })
        };
        })
   let result = {
      total : total,
      completed: completed,
      percent : completed * 100 /total

        };
        if(type === 'quiz') {
        result.scoreSum = scoreSum;
        result.scoreAvg = scoreAvg
        }
     console.log(result)
     return result;
     
    };

    students = students.map(objStudents =>{    
      const object = {
        name :objStudents.name,
        stats : {
          percent :calcPercent(objStudents),
          exercises :calcStats(objStudents, 'practice'),
        }
      };
      console.log(object)
      return object;
    })   
      return students; 
}



window.sortUsers= (users,orderBy, orderDirection) => {
   if (orderBy === "name" && orderDirection === "Ascendente") {
      users.sort( function(a, b) {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        }
    //     return 0;
    //     if(a<b) return 1;
    // if(a===b) return 0;
    // return -1;};
      })
    
    }
    if (orderBy === "completitud" && orderDirection === "Ascendente") {
      users.sort(function(a, b) {
        return (a.stats.percent - b.stats.percent);
      })
    }
    if (orderBy === "ejercicios" && orderDirection === "Ascendente") {
      users.sort(function(a, b) {
        return (a.stats.exercises.percent - b.stats.exercises.percent);
      })
    }
    if (orderBy === "lecturas" && orderDirection === "Ascendente") {
      users.sort(function(a, b) {
        return (a.stats.reads.percent - b.stats.reads.percent);
      })
    }
    if (orderBy === "quizzes" && orderDirection === "Ascendente") {
      users.sort(function(a, b) {
        return (a.stats.quizzes.percent - b.stats.quizzes.percent);
      })
    }
    if (orderDirection === "DESC") {
      users = users.reverse();
    }
    return users;
  };



window.filterUsers = (users, search) => {
   let nameFilter = users.filter((user) => {
     (user.name.toUpperCase().indexOf(search.toUpperCase()) !== -1);
      
    })
   console.log(nameFilter);
}


window.processCohortData = (options) => {
  console.log(options)
 let courses= Object.keys(options.cohort.coursesIndex);
  let students= computeUsersStats(options.cohortData.users,options.cohortData.progress,courses)
  // console.log(students)
  // return students;
  let nameFilter = filterUsers(options.cohortData.users, options.search);
  let orderList = sortUsers(students, options.orderBy, options.orderDirection);
  return orderList;
}

