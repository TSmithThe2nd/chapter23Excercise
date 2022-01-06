function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     });
     missionAbort.addEventListener("mouseenter", function( event ) {
        event.target.style.backgroundColor = 'red';
     });
     missionAbort.addEventListener('mouseleave', function( event ) {
        event.target.style.backgroundColor = '';
     });
     missionAbort.addEventListener('click',event=>{
         if(window.confirm('Are you sure?')){
             paragraph.innerHTML="Mission aborted"
         }         
     })
}

window.addEventListener("load", init);