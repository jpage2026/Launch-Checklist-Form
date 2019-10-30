// Write your JavaScript code here!
window.addEventListener("load", function() {

      fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response){
         response.json().then( function(json){
            const div  = document.getElementById("missionTarget");
            let data = json[4];
            div.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li> Name: ${data.name}</li>
                  <li> Diameter: ${data.diameter}</li>
                  <li> Star: ${data.star}</li>
                  <li> Distance from Earth: ${data.distance}</li>
                  <li> Number of Moons: ${data.moons}</li>
               </ol>
               <img src="${data.image}">
               `;
         });
      });


   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
       let pilotnameInput = document.querySelector("input[name = pilotName]")
       let pilotStatus = document.getElementById("pilotStatus")
       let copilotnameInput = document.querySelector("input[name = copilotName]")
       let copilotStatus = document.getElementById("copilotStatus")
       let fuelInput = document.querySelector("input[name =fuelLevel]")
       let weightInput= document.querySelector("input[name=cargoMass]")
       let pilot = pilotnameInput.value;
       let copilot = copilotnameInput.value;
       let fuelLevel = fuelInput.value;
       let cargoLevel = weightInput.value;


       if ((pilot === "") || (copilot ==="") || (fuelLevel === "") || (cargoLevel === "")) {
           alert("All feilds required!") 
           
       }
       else if ((!isNaN(pilot)) || (!isNaN(copilot)) || (isNaN(fuelLevel)) || (isNaN(cargoLevel))){
         alert("All feilds required!") 
       }
      
        else if((fuelLevel <10000) && (cargoLevel < 10000 )){
            document.getElementById("fuelStatus").innerHTML= "Fuel Level too low for launch"
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"
            document.getElementById("launchStatus").style.color = "Red";
            
        }
        else if((fuelLevel <10000) && (cargoLevel >=10000)) {
            document.getElementById("fuelStatus").innerHTML= "Fuel Level to0 low for launch"
            document.getElementById("cargoStatus").innerHTML = "Cargo mass to0 high for launch."
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"
            document.getElementById("launchStatus").style.color = "Red";
            
        }

        else if ((cargoLevel >= 10000) && (fuelLevel >= 10000)){
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch"
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"
            document.getElementById("launchStatus").style.color = "Red";
            
        }
        else {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"
            document.getElementById("fuelStatus").innerHTML = "Fuel level good for launch"
            document.getElementById("launchStatus").innerHTML = "Shuttle Ready for Launch"
            document.getElementById("launchStatus").style.color = "Green";
            
        }
        
        pilotStatus.innerHTML = `Pilot: ${pilotnameInput.value} is ready.`
        copilotStatus.innerHTML = `Co Pilot: ${copilotnameInput.value} is ready.`
    
       });
   
});



// document.getElementById("pilotStatus").innerHTML = (pilotnameInput.value)

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
