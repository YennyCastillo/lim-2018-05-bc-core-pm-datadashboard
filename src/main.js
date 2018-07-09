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
const filtro = document.getElementById("filtOrder");
const OrderBy = document.getElementById("OrderBy");
const selectDirection = document.getElementById("Direction");
const textAuto = document.getElementById("textAuto");


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
 content += `<div id=${cohort.id} class='cohort']>${cohort.id}</div>` 
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
  studentsStats.forEach((objStudentsStats) => {
   template += `
   <div class='content'> 
<p> ${objStudentsStats.name} </P>
<p>Completitud:${Math.floor(objStudentsStats.stats.percent)}</P>
<p>${Math.floor(objStudentsStats.stats.exercises.total)}</P>
<p></P>
<p></P>
<p></P>
</div>
     `  
     });
  container.innerHTML = template;
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
 

OrderBy.addEventListener("change", () => {
  let contenido=OrderBy.value;
  options.orderBy = contenido;
})

selectDirection.addEventListener('change', () => {

 alert("HOla mundo")
})