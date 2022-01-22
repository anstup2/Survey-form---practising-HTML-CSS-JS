function submitAction() {
    
  let x=document.getElementById("name").innerHTML;
  let y=document.getElementById("email").innerHTML;
  let z=document.getElementById("number").innerHTML;
  
  if (x.value !="" && y.value !="" && z.value !="") {
    alert('Thank you for submitting this survey');
    
  }

}