function handleSearch(event){
    event.preventDefault();
    let searchForm=document.querySelector("#search-form-input");
    let townElement=document.querySelector("#city");
    townElement.innerHTML=searchForm.value;
    
    }


let searchInput=document.querySelector("#search-form");
searchInput.addEventListener("submit", handleSearch);