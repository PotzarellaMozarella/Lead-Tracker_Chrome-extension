//variables
let myLeads = [];
let listItems = "";
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

//storing parsed leads from local storage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

//calling render fuction if any leads exist in local storage
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

//event listner for save tab that saves the current tab in local storage
tabBtn.addEventListener("click", function() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads); 
    }); 
})

//rendering leads and making them clickable
function render(leads) {
    let listItems = ""
    for(let i=0; i<leads.length; i++) {
        listItems += `
        <li>
            <a href='${leads[i]} 'target='_blank> 
            ${myLeads[i]} 
            </a>
        </li>`

        listItems += "<li><a href='" + leads[i] + "'target='_blank'>" + leads[i] +"</a></li>"
        
    } 
// best to manipulate the DOM one time out of the loop to reduce cost
unEl.innerHTML = listItems
}

//event listner for input and storing it in local storage
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value ="";
    // for persisting data across page refresh (store array in local storage)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);  
})

//event listner for deleting all saves leads
deleteBtn.addEventListener("click", function() {
    localStorage.clear();
    console.clear();
    myLeads = [];  
    render(myLeads); 
})





//unEl.innerHTML += "<li>" + myLeads[i] + "</li>";
        //other way of doing it
        /* const li = document.createElement("li")
        li.textContent = myLeads[i]
        unEl.append(li) */


/*myLeads = `["string"]`;
myLeads= JSON.parse(myLeads);
myLeads.push("remem");
myLeads= JSON.stringify(myLeads)
console.log(typeof myLeads) */
