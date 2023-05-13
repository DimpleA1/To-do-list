const inputBox  =  document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
 


function addTask(){

if(inputBox.value === ''){
    alert("You Must Write Something!");
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

//for cross sign//
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
inputBox.value = "";
saveData();
  



}
  //if the input box is empty then it will give an alert else//
  //it will create a empty variable called li and will add the input box value inside that li//
// text in li will be stored in list container//



//click function for marking check on task or deletion of task//
listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    } 
    
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
},false);



//to save data//
 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}




//to display the data again when we will reopen the app again//
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();