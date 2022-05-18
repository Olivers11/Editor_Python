const fs = require("fs");
const exec = require("child_process").exec;
let table = document.getElementById("content");

window.onload = ()=>{
    editor.setValue("", 0);
    editor.focus();
}

document.getElementById('editor').addEventListener('keyup', ()=>{
    if(existFile("./hola.py")){
	Escribir();
    }else{
	createFile();
	Escribir();
    }

    exec("python3 hola.py", function (error, stdout, stderr) {
      if (error !== null) {
        console.log(stderr);
        table.innerText = `${stderr}`;
        return error;
      } else {
        console.log(stdout);
        table.innerText = `${stdout}`;
        return stdout;
      }
    });
});


document.addEventListener("keydown", (event)=>{
    if(event.ctrlKey && event.key == "q"){
	editor.selectAll();
	editor.removeLines();
    }
});

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key == "b") {

    if(existFile("./hola.py")){
	Escribir();
    }else{
	createFile();
	Escribir();
    }

    exec("python3 hola.py", function (error, stdout, stderr) {
      if (error !== null) {
        console.log(stderr);
        table.innerText = `${stderr}`;
        return error;
      } else {
        console.log(stdout);
        table.innerText = `${stdout}`;
        return stdout;
      }
    });
  }
});






function existFile(file){
    return fs.existsSync(file);
}



function createFile(){
    fs.writeFile('./hola.py', '', (err)=>{
	if(err) throw err;
	console.log("created file");
    });
}



function Escribir(){
  var texto = editor.getValue();
  var route = './hola.py';
  fs.writeFile(route, texto, (err) =>{
    if(err){
      return console.log(err);
    }
    console.log("file saved");
  })
}


