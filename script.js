// Write your JavaScript code here!
window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(responese){
      Response.json().then( function(json){
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
            <ol>
               <li> Name: ${json.name}</li>
               <li> Diameter: ${json.diameter}</li>
               <li> Star: ${json.star}</li>
               <li> Distance from Earth: ${json.distance}</li>
               <li> Number of Moons: ${json.moons}</li>
            </ol>
            <img src="${json.image}">
            ;`
      });
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
