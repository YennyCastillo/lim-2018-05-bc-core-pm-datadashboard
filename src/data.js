const getJSON=(url, callback)=>{
const xhr = new XMLHttpRequest();
xhr.onload = ()=> {
 if (xhr.readyState === 4){
   if (xhr.status !== 200 ) {// Success!
  return callback(new Error(`HTTP error: ${xhr.status}`));
}
try{
   callback(null,JSON.parse(xhr.responseText));
 } catch(err) {// We reached our target server, but it returned an error
   callback(err);
 }}};
xhr.open("GET", url);
xhr.send();
};






/*var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL ="https://github.com/YennyCastillo/lim-2018-05-bc-core-pm-datadashboard/blob/master/data/cohorts/lim-2018-03-pre-core-pw/users.json" ;
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.onload = function () {
if (request.status >= 200 && request.status < 400) {// Success!
  let data = JSON.parse(request.responseText);
  console.log(data);
} else {// We reached our target server, but it returned an error
}};
request.send();*/


/*request.onload = function() {
var superHeroes = request.response;
populateHeader(superHeroes);
showHeroes(superHeroes);
}
function populateHeader(jsonObj) {
var myH1 = document.createElement('h1');
myH1.textContent = jsonObj['squadName'];
header.appendChild(myH1);

var myPara = document.createElement('p');
myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
header.appendChild(myPara);
}
function showHeroes(jsonObj) {
var heroes = jsonObj['members'];

for (var i = 0; i < heroes.length; i++) {
var myArticle = document.createElement('article');
var myH2 = document.createElement('h2');
var myPara1 = document.createElement('p');
var myPara2 = document.createElement('p');
var myPara3 = document.createElement('p');
var myList = document.createElement('ul');

myH2.textContent = heroes[i].name;
myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
myPara2.textContent = 'Age: ' + heroes[i].age;
myPara3.textContent = 'Superpowers:';

var superPowers = heroes[i].powers;
for (var j = 0; j < superPowers.length; j++) {
  var listItem = document.createElement('li');
  listItem.textContent = superPowers[j];
  myList.appendChild(listItem);
}

myArticle.appendChild(myH2);
myArticle.appendChild(myPara1);
myArticle.appendChild(myPara2);
myArticle.appendChild(myPara3);
myArticle.appendChild(myList);

section.appendChild(myArticle);
}
}*/
