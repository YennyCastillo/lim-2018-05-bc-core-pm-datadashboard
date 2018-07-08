// const buttonSiguient = document.getElementById("map");
// buttonSiguient.addEventListener("click" , ()=>{
// document.getElementById("map").style.display = "none";
// document.getElementById("lista").style.display = "block";
// document.getElementById("principal").style.display = "block";
// document.getElementById("secundario").style.display = "block";
// });



const extractJSON = (str, url, callback) => {
  fetch(url)
      .then((response) => response.json())
      .then((data) => {
        callback(str,data)
      })
      .catch((err) => console.log(err))
};

const selectionSede = document.getElementById("map");
const container = document.getElementById("result");

const options = {
  cohort:null,
cohortData:{
users: null,
progress: null,
},
orderBy: "name",
orderDirection: "ASC",
search: " "
};

const procesCohorts = (id, arrCohorts) =>{
  console.log(id, arrCohorts)
const newArrCohort = arrCohorts.filter(element => {
  return element.id.indexOf(id) !== -1;
  });
console.log(newArrCohort);
 let content = '';
newArrCohort.forEach(cohort =>{
  console.log(newArrCohort);
 content += `<div id=${cohort.id} class='cohort'>${cohort.id}</div>` 
});
 container.innerHTML= content;
}
const procesProgress = (idCohort, objProgress)=> {
  console.log(idCohort, objProgress);
  options.cohortData.progress = objProgress;
  console.log(options);
  const studentsStats = processCohortData(options);
  console.log(studentsStats);
  let template = '';
  studentsStats.forEach((objStudentsStats ) => {
  template += `<div id=${objStudentsStats.name} class='cohort'>${objStudentsStats.name}</div>
  <div id=${objStudentsStats.stats.exercises.completed} class='cohort'>${Math.floor(objStudentsStats.stats.exercises.completed)}</div>
  <div id=${objStudentsStats.stats.exercises.total} class='cohort'>${Math.floor(objStudentsStats.stats.exercises.total)}</div>
  `   });
  container2.innerHTML = template;
}

const procesUsers = (idCohort, arrUsers) => {
  console.log(idCohort, arrUsers);
  options.cohortData.users = arrUsers;
  extractJSON(idCohort, "../data/cohorts/lim-2018-03-pre-core-pw/progress.json", procesProgress)
}

const cohortSelected = (idCohort, dataCohorts) => {
console.log(idCohort, dataCohorts);
dataCohorts.forEach(objCohort =>{
  if(objCohort.id === idCohort) {
options.cohort = objCohort;
  }

})
}

selectionSede.addEventListener("click" , event =>{
  console.log(event.target.nodeName);
  if(event.target.nodeName !== 'AREA'){
    return;
  }
  console.log(event.target);
const id = event.target.id;
extractJSON(id,"../data/cohorts.json", procesCohorts)
})

container.addEventListener("click", event => {
  console.log(event.target);
 const id = event.target.id;
 console.log(id)
 extractJSON(id, "../data/cohorts.json", cohortSelected)
 extractJSON(id, "../data/cohorts/lim-2018-03-pre-core-pw/users.json", procesUsers)
})
 


//Obtener data con fetch y promise all
//  let courses={}
// let users={}
// let progress={}
//   let cohortData = fetch("../data/cohorts.json")
//   .then((res) => {return res.json()});
//    let usersData = fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json")
//    .then((res) => {return res.json()});
//      let progressData = fetch("../data/cohorts/lim-2018-03-pre-core-pw/progress.json")
//     .then((res) => {return res.json()});
//     Promise.all([cohortData, usersData, progressData]).then(data => {
//                   courses = data[0]
//                   users = data[1]
//                   progress = data[2]
//             computeUsersStats = (users, progress, courses)
//                 })
//                 .catch((err) =>{ })
// //Evento para mostrar cohorts- sedes
//  const cohortsData = document.getElementById("cohorts");
// //  sedeLim.addEventListener("click", () => {
// const coursesC = (url, callback) => {
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => callback(data))
//         .catch((err) => console.log(err));
// };
// coursesC("../data/cohorts.json", (data) => {
//   for (let i of data) {
//       console.log(i);
//     if(i.id.substr(0,3)=== 'lim'){
//       const optionsElemntsC=document.createElement('option');
//       const contenidoOptionsC= document.createTextNode(i.id);
//       optionsElemntsC.appendChild(contenidoOptionsC);
//       cohortsData.appendChild(optionsElemntsC);
//     }}});
//
//     users.addEventListener('change', () => {
//       if (listCohorts.value === 'lim-2018-03-pre-core-pw') {
//         const mysubtittle = document.createElement('h1');
//         mysubtittle.textContent = "lim-2018-03-pre-core-pw";
//          subtittle.appendChild(mysubtittle);
//         let courses = [];
//         if (data[1].id === 'lim-2018-03-pre-core-pw') {
//           for (key in values[2].coursesIndex) {
//             values[2].push(key);
//           }
//         }
//         functionUser(values[2], values[3], courses);
//       } else {
//         alert("Aún no hay datos");
//       }
//     })

// extractJSON(id, "../data/cohorts.json", (data) => {
//   console.log(data);
// });

// extractJSON(id, "../data/cohorts/lim-2018-03-pre-core-pw/users.json", (data) => {
//   console.log(data);
// });
// extractJSON(id, "../data/cohorts/lim-2018-03-pre-core-pw/progress.json", (data) => {
//   console.log(data);
// });
