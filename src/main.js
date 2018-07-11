const extractJSON = (str, url, callback) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      callback(str, data)
    })
    .catch((err) => console.log(err))
};

const selectionSede = document.getElementById("map");
const container = document.getElementById("result");
const selectOrderBy = document.getElementById("OrderBy");
const selectDirection = document.getElementById("Direction");
const search = document.getElementById("search");


const options = {
  cohort: null,
  cohortData: {
    users: null,
    progress: null,
  },
  orderBy: "name",
  orderDirection: "Ascendente",
  search: " "
};

//EVENTOS DOM
selectOrderBy.addEventListener('change', () => {
  options.orderBy = selectOrderBy.value;
       
})

selectDirection.addEventListener('change', () => {
  options.orderDirection = selectDirection.value;
  let filterDirec = processCohortData(options);
  pintarData(filterDirec)
})

search.addEventListener('keyup', () => {
  options.search = search.value;
  console.log(options)
  let searchs = processCohortData(options);
 pintarData(searchs);
 })

  //Seleccionar sedes
selectionSede.addEventListener("click", event => {
  console.log(event.target.nodeName);
  if (event.target.nodeName !== 'AREA') {
    return;
  }
  console.log(event.target);
  const id = event.target.id;
  extractJSON(id, "../data/cohorts.json", procesCohorts)
})
//Seleccionar cohorts de sede seleccionada
container.addEventListener("click", event => {
  console.log(event.target);
  if (event.target.id === 'AREA') {
    return;
  }
  const id = event.target.id;
  //console.log(id)
  extractJSON(id, "../data/cohorts.json", cohortSelected)
  extractJSON(id, "../data/cohorts/lim-2018-03-pre-core-pw/users.json", procesUsers)
})


//obteniendo cohorts de sedes seleccionada
const procesCohorts = (id, arrCohorts) => {
  //console.log(id, arrCohorts)
  const newArrCohort = arrCohorts.filter(element => {
    return element.id.indexOf(id) !== -1;
  });
  //console.log(newArrCohort);
  let content = '';
  newArrCohort.forEach(cohort => {
    // console.log(newArrCohort);
    content += `<div id=${cohort.id} class='cohort'>${cohort.id}</div>`
  });
  container.innerHTML = content;
}

const cohortSelected = (idCohort, dataCohorts) => {
  //console.log(idCohort, dataCohorts);
  dataCohorts.forEach(objCohort => {
    if (objCohort.id === idCohort) {
      options.cohort = objCohort;
    }

  })
}

const procesUsers = (idCohort, arrUsers) => {
  // console.log(idCohort, arrUsers);
  options.cohortData.users = arrUsers;
  extractJSON(idCohort, "../data/cohorts/lim-2018-03-pre-core-pw/progress.json", procesProgress)
}


//Obteniendo objeto progress
const procesProgress = (idCohort, objProgress) => {
  // console.log(idCohort, objProgress);
  options.cohortData.progress = objProgress;
  console.log(options);
  const studentsStats = processCohortData(options);
  pintarData(studentsStats)
}

//Funcion para pintar datos
const pintarData = (studentsStats) => {
  let template = '';
  studentsStats.forEach((objStudentsStats) => {
    console.log(objStudentsStats)
    template += `
   <div class='content'> 
<p> ${objStudentsStats.name} </P>
<p>Completitud General(%):${Math.floor(objStudentsStats.stats.percent)}</P>
<p>Ejercicios Autocorregidos completados(%):${Math.floor(objStudentsStats.stats.exercises.percent)}</P>
<p>Quizzes Completados(%):${Math.floor(objStudentsStats.stats.quizzes.percent)}</P>
<p>Lecturas Completadas(%):${Math.floor(objStudentsStats.stats.reads.percent)}</P>
</div>
     `
  });
  container.innerHTML = template;
}



