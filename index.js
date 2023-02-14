var link_name = document.getElementById("LinkName");
var link_url = document.getElementById("LinkURL");
var tablerow = document.getElementById("tableRow");

 var linkarr;
 if (localStorage.getItem("data")==null) {
    linkarr=[]
    
 }
else{
    linkarr=JSON.parse(localStorage.getItem("data"))
    display()
}
function addlink() {
var linkobj={
    link_nameObj: link_name.value,
    link_urlObj: link_url.value

}
    
linkarr.push(linkobj);
    localStorage.setItem("data", JSON.stringify(linkarr));
display()
}
function display() {
    var box = "";
    for (var index = 0; index < linkarr.length; index++) {
        box += `
        
        
           <div class="d-flex">
            <p class="me-5 w-25">${linkarr[index].link_nameObj}</p>
            
           
            <span class="ms-5"> <button class="btn btn-danger" onclick="deletee(${index})"> Delete</button> </span>
            <span class="ms-2">  <a class=" btn btn-primary" href="${linkarr[index].link_urlObj}" target="_blank"> Visit</a></span>
        </div>
       
       `

    }

    tablerow.innerHTML = box;
}




function deletee(i) {
    linkarr.splice(i,1)
    display()
    
}