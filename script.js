function writeToClipboard() {
    
    navigator.clipboard.writeText("alfred@stensatter.se");
  
    // Alert the copied text
    alert("Copied the text: " + "alfred@stensatter.se");
  } 

function on(){

  let menu = document.getElementById("menu");
  menu.style = "top:0%;  transition-duration: 500ms;"
  console.log(menu)
}

function off(){

  let menu = document.getElementById("menu");
  menu.style = "top:-100%;  transition-duration: 500ms;"
  console.log(menu)
}