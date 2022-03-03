function makeitBigger()
{
    alert("Hello World");
    document.getElementById("text").style.fontSize = "24pt";
}

  function fancy()
{
    document.getElementById("boring").checked  = false;  
    document.getElementById("textfield").style.fontWeight = "bold";
    document.getElementById("textfield").style.color = "0000FF";
    document.getElementById("textfield").style.textDecoration = "underline";
    document.getElementById("textfield").style.textTransform = "uppercase";
    document.getElementById("textfield").style.fontStyle = "Arial";
}

function boring()
{
    document.getElementById("fancy").checked  = false; 
	document.getElementById("textfield").style.fontWeight = "normal";
	document.getElementById("textfield").style.color = "#000000";
	document.getElementById("textfield").style.textDecoration = "none";
	document.getElementById("textfield").style.fontSize = "initial";
	document.getElementById("textfield").style.textTransform = "initial";
    document.getElementById("textfield").style.fontSize = "12pt";
    document.getElementById("textfield").style.fontStyle = "Arial";
}

function letsMoo() {  
    let str = document.getElementById("text");
    str.style.textTransform = "uppercase";
    let parts = str.value.split(".");
    str.value = parts.join("-Moo.");
}
