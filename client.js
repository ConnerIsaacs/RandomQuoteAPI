var x = document.getElementsByClassName("quote");
for(var i = 0; i < x.length;i++){
  x[i].addEventListener("click",changeHeight);
}

function changeHeight(){
  var id = document.getElementById(this.id+"Params");
  console.log(this.id);
  if(this.id === "mostPopular"){
    document.getElementById('example').innerHTML = '<strong>Example call:</strong> https://randomquoteapi.glitch.me/'+this.id;
  }
  else{
    document.getElementById('example').innerHTML = '<strong>Example call:</strong> https://randomquoteapi.glitch.me/'+this.id+'?amount=5';
  }
    
  
  
  if(id.style.height != "8%"){
    id.style.height = "8%";
  }
  else{
    id.style.height = "0%";
  }
}
