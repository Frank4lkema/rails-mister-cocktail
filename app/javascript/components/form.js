function toggleForm () {
    document.getElementById("x").addEventListener("click",
    function(){
      const x = document.getElementById("toggle_form");
      if ( x.style.visibility === "visible"){
        x.style.visibility = "hidden";
      } else {
        x.style.visibility = "visible";
      }
});}

export {toggleForm};


