const buttonSiguient = document.getElementById("map");
buttonSiguient.addEventListener("click" , ()=>{
  document.getElementById("map").style.display = "none";
  document.getElementById("lista").style.display = "block";
  document.getElementById("principal").style.display = "block";
  document.getElementById("secundario").style.display = "block";
});

let courses={}
let users={}
let progress={}
  let cohortData = fetch("../data/cohorts.json")
  .then((res) => {return res.json()});
   let usersData = fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json")
   .then((res) => {return res.json()});
     let progressData = fetch("../data/cohorts/lim-2018-03-pre-core-pw/progress.json")
    .then((res) => {return res.json()});

    Promise.all([cohortData, usersData, progressData]).then(data => {
                  courses = data[0]
                  users = data[1]
                  progress = data[2]
                  computeUsersStats(courses, users, progress)
                })
                .catch((err) =>{ })

//Evento para mostrar cohorts- sedes
 const cohortsData = document.getElementById("cohorts");
 const userData = document.getElementById("users");
//  sedeLim.addEventListener("click", () => {
  const extractJSON = (url, callback) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => callback(data))
        .catch((err) => console.log(err));
};
extractJSON("../data/cohorts.json", (data) => {
  for (let i of data) {
    console.log(i);
  if(i.id.substr(0,3)=== 'lim'){
    const optionsElemntsC=document.createElement('option');
    const contenidoOptionsC= document.createTextNode(i.id);
    optionsElemntsC.appendChild(contenidoOptionsC);
    cohortsData.appendChild(optionsElemntsC);
  }}})
