function makeitBigger()
{
    alert("Hello World");
    document.getElementById("text").style.fontSize = "24pt";
}

function letsMoo() {  
    let str = document.getElementById("text");
    str.style.textTransform = "uppercase";
    let parts = str.value.split(".");
    str.value = parts.join("-Moo.");
}
