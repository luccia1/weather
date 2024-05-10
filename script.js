function changeTemp(response){
  console.log(response);
}


function searchCity(city){
    let apiKey="3d19633teeafa6c79049ab3o334f7b44";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey} `;
    axios.get(apiUrl) .then(changeTemp);
}


function handleSearch(event){
    event.preventDefault();
    let searchForm=document.querySelector("#search-form-input");

    let =document.querySelector("#city");
    townElement.innerHTML=searchForm.value;
    searchCity(searchForm.value);
    
    }


let searchInput=document.querySelector("#search-form");
searchInput.addEventListener("submit", handleSearch);



