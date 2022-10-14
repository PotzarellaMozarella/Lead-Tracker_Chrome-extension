let myLeads = [];

const inputEl = document.getElementById("input-el")
const unEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("savetab-btn")

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads); 
    }); 
})

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

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

unEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value ="";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);  
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
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