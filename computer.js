function validateForm() {
    let x = document.forms["form1"]["name"].value;
    if (x == "") {
       document.getElementById("numloc").innerHTML="* Please enter Name to continue"; 
      return false;
    }
    let y = document.forms["form1"]["email_address"].value;
    if (y == "") {
       document.getElementById("numloc1").innerHTML="* Please enter Email to continue"; 
      return false;
    }
    let z = document.forms["form1"]["phone"].value;
    if (z == "") {
       document.getElementById("numloc2").innerHTML="* Please enter Phone to continue"; 
      return false;
    }
  }