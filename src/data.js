window.computeUsersStats = (users, progress, courses) => {
  console.log(users, progress, courses);
  let students = users.filter(objUser => objUser.role === 'student');
  //console.log(students)

  const calcPercent = student => {
    let count = 0;
    courses.forEach(course => {
      const progressUser = progress[student.id];
      if (progressUser.hasOwnProperty(course)) {
        //console.log(progressUser)
        count += progressUser[course].percent;
      };
    });
    // console.log(count)
    return (count / courses.length);
  };

  const calcStats = (students, type) => {
    let completed = 0;
    let total = 0;
    let scoreSum = 0;
    let scoreAvg = 0;

    courses.forEach((course) => {
      const progresUser = progress[students.id];
      if (progresUser.hasOwnProperty(course)) {
        const units = Object.values(progresUser[course].units);
        // console.log(units)   
        units.forEach((objectUnit) => {
          const parts = Object.values(objectUnit.parts);
          // console.log(parts);

          switch (type) {
            case 'practice':
              const exercises = parts.filter(objParts => objParts.type === 'practice' && objParts.hasOwnProperty('exercises'));
              // console.log(exercises);
              exercises.forEach((objectExc) => {
                completed += objectExc.completed;
              })
              total += exercises.length;

              break;

            case 'read':
              const reads = parts.filter(objParts => objParts.type === 'read');
              //console.log(reads);
              reads.forEach((objectRead) => {
                completed += objectRead.completed;
              })
              total += reads.length;

              break;
            case 'quiz':
              const quiz = parts.filter(objParts => objParts.type === 'quiz');
              //console.log(quiz);
              quiz.forEach((objectQuiz) => {
                completed += objectQuiz.completed;
                scoreSum += objectQuiz.score;
                scoreAvg += scoreSum/total;
              })
              total += quiz.length;

              break;

            default:
              break;
          }
        })
      };
    })
    let result = {
      total: total,
      completed: completed,
      percent: completed * 100 / total

    };
    if (type === 'quiz') {
      result.scoreSum = scoreSum;
      result.scoreAvg = scoreAvg;
    }
    // console.log(result)
    return result;

  };

  students = students.map(objStudents => {
    const object = {
      name: objStudents.name,
      stats: {
        percent: calcPercent(objStudents),
        exercises: calcStats(objStudents, 'practice'),
        reads: calcStats(objStudents, 'read'),
        quizzes: calcStats(objStudents, 'quiz')
      }
    };
    //console.log(object)
    return object;
  })
  return students;
}



window.sortUsers = (users, orderBy, orderDirection) => {
  // Ordenar por nombre
  if (orderBy === "name" && orderDirection === "Ascendente") {
    users.sort((a, b)=> {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
         
      }
      return 0;
    })

  }else  if (orderBy === "name" && orderDirection === "Descendente") {
    users.sort((a, b)=> {
      if (a.name.toLowerCase() < b.name.toLowerCase() ) {
        return 1;
      } else if (a.name.toLowerCase()  > b.name.toLowerCase() ) {
        return -1;
      }
      return 0;
    })
  }

// ordenar por completitud 
  if (orderBy === "completitud" && orderDirection === "Ascendente") {
    users.sort((a, b)=> {
      return a.stats.percent - b.stats.percent;
    })
  }else  if (orderBy === "completitud" && orderDirection === "Descendente") {
    users.sort((a, b)=> {
      return b.stats.percent -a.stats.percent;
    })
  }

  if (orderBy === "ejercicios" && orderDirection === "Ascendente") {
    users.sort((a, b)=> {
      return a.stats.exercises.percent - b.stats.exercises.percent;
    })
  }else  if (orderBy === "completitud" && orderDirection === "Descendente") {
    users.sort((a, b)=> {
      return b.stats.exercises.percent -a.stats.exercises.percent;
    })
  }

  if (orderBy === "lecturas" && orderDirection ==="Ascendente") {
    users.sort((a, b)=> {
      return a.stats.reads.percent - b.stats.reads.percent;
    })
  }else  if (orderBy === "completitud" && orderDirection === "Descendente") {
    users.sort((a, b)=> {
      return b.stats.reads.percent -a.stats.reads.percent;
    })
  }

  if (orderBy === "quizzes" && orderDirection === "Ascendente") {
    users.sort((a, b)=> {
      return a.stats.quizzes.percent - b.stats.quizzes.percent;
    })
  }else  if (orderBy === "completitud" && orderDirection === "Descendente") {
    users.sort((a, b)=> {
      return b.stats.quizzes.percent -a.stats.quizzes.percent;
    })
  }

  // if (orderDirection === "Descendente") {
  //  users = users.reverse();
  // }
  console.log(users)
  return users;
};



window.filterUsers = (users, search) => {
  // console.log(users);
  // console.log(search)
  let nameFilter = users.filter((user) => {
    return user.name.toUpperCase().indexOf(search.toUpperCase()) !== -1;
  })
  console.log(nameFilter);
  return nameFilter;
}


window.processCohortData = (options) => {
  // console.log(options)
  let courses = Object.keys(options.cohort.coursesIndex);
  let students = computeUsersStats(options.cohortData.users, options.cohortData.progress, courses)
  // console.log(students)
  // return students;
  let orderList = sortUsers(students, options.orderBy, options.orderDirection);
  let filterUser = filterUsers(orderList, options.search);
  console.log(orderList);
  console.log(options.search);
  return filterUser;
}

