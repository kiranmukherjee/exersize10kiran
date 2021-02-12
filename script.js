let btn1 = document.getElementById("button1")
let url="/shared/1/facebook.json"

$.getJSON(url, function(data){
   btn1.onclick = console.log(data);
})