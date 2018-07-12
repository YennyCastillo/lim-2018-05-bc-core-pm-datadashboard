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
let selectOrderBy = undefined;
let selectDirection = undefined;
let search = undefined;

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

//Seleccionar sedes
selectionSede.addEventListener("click", event => {
   if (event.target.nodeName !== 'AREA') {
    return;
  }
  const id = event.target.id;
  extractJSON(id, "../data/cohorts.json", procesCohorts)
})
//Seleccionar cohorts de sede seleccionada
container.addEventListener("click", event => {
  if (event.target.id === 'AREA') {
    return;
  }
  if (!event.target.classList.contains('cohort')) {
    return;
  }
  const id = event.target.id;
  
  extractJSON(id, "../data/cohorts.json", cohortSelected)
  extractJSON(id, "../data/cohorts/lim-2018-03-pre-core-pw/users.json", procesUsers)
})


//obteniendo cohorts de sedes seleccionada
const procesCohorts = (id, arrCohorts) => {
    const newArrCohort = arrCohorts.filter(element => {
    return element.id.indexOf(id) !== -1;
  });
  let cohort_name = getCohortName(id);
  let content = '';
  content += "<div class='cohorts-content d-flex flex-column w-100'><div class='cohorts-header'>";
  content += "<ul>";
  content += "<li class='active'>Cohorts " + cohort_name + "</li>";
  content += "</ul>";
  content += "</div>";
  content += "<div class='cohorts-main'>";
  newArrCohort.forEach(cohort => {
  content += `<div id=${cohort.id} class='cohort'>${cohort.id}</div>`
  });
  content += "</div>";
  content += genAlumnFilters;
  content += "</div>";
  container.innerHTML = content;
  selectionSede.classList.add('d-none');
  alumns_container.init();
}

const genAlumnFilters = `
  <div class='cohorts-alumns-container d-none'>
    <div id="tabla" >
        <div class="contain2 pb-3">
          <div id="Filtros" class="d-flex">
            <div id="buscador" class="w-50 text-center">
              <p class="mb-2">Alumnas: </p>
              <input type="text" placeholder="Buscar nombre" id="search">
            </div>
            <section id="filtOrder" class="w-50 text-center">
                <p class="mb-2">Filtros: </p>
              <select id="OrderBy">
                <option value="-">Ordenar Por ...</option>
                <option value="name">Nombre</option>
                <option value="completitud">Completitud</option>
                <option value="ejercicios">Excercises</option>
                <option value="lecturas">Lecturas</option>
                <option value="quizzes">Quizzes</option>
              </select>
              <select id="Direction">
                <option value="-">Ordenar Por ...</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
              </select>
            </section>
          </div>
        </div> 
      
        <div class="container bg-2 text-center" id="result">
        </div>
      <div id="result2"></div>
    </div>
    <div class='cohorts-alumns'></div>
    <button class="btn-back" onclick="closeAlumns()">Volver</button>
  </div>
`;

const closeAlumns = () => {
  alumns_container.container.classList.add('d-none');
  cohorts_container = document.getElementsByClassName("cohorts-main")[0];
  cohorts_container.classList.remove("d-none");
};

const getCohortName = (id) => {
  let cohort_name = '';
  switch (id) {
    case "lim":
      cohort_name = "Lima";
      break;
    case "gdl":
      cohort_name = "Guadalajara";
      break;
    case "cdmx":
      cohort_name = "Ciudad de México";
      break;
    case "spl":
      cohort_name = "Sao Paulo";
      break;
    case "scl":
      cohort_name = "Santiago de Chile";
      break;
    default:
      cohort_name = "Error";
      break;
  }
  return cohort_name;
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
  //console.log(options);
  const studentsStats = processCohortData(options);
  pintarData(studentsStats)
}

//Funcion para pintar datos
const pintarData = (studentsStats) => {
  let template = '';
  //console.log(studentsStats);
  studentsStats.forEach((objStudentsStats) => {
    //console.log(objStudentsStats)
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
  //container.innerHTML = template;
  alumns_container.paint(template);
}

const alumns_container = {
  init: () => {
    alumns_container.elem = document.getElementsByClassName("cohorts-alumns")[0];
    selectOrderBy = document.getElementById("OrderBy");
    selectDirection = document.getElementById("Direction");
    search = document.getElementById("search");

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
  },
  container: undefined,
  elem: undefined,
  paint: (html) => {
    alumns_container.elem.innerHTML = html;
    cohorts_container = document.getElementsByClassName("cohorts-main")[0];
    alumns_container.container = document.getElementsByClassName("cohorts-alumns-container")[0];
    cohorts_container.classList.add('d-none');
    alumns_container.container.classList.remove("d-none");
  }
}