let search = document.querySelector("#search")

// The event listener will send an API request when clicked
search.addEventListener("click", ()=>{
    console.log("button was pressed")
    sendAPIRequest()
})

// Fetches API data
async function sendAPIRequest(){
    let APP_ID = "f8177942"
    let API_KEY = "f302c4ff0068237963ce94d618251817"
    let response = await fetch (`https://api.edamam.com/search?app_id = ${APP_ID} & app_key = ${API_KEY} & q = pasta`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useData(data)
}

// Displays data from API on cards
function useData(data){
    document.querySelector("#content").innerHTML = `
    <div class="card col-3 offset-2" style="width: 18rem;">
        <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"> ${data.hits[0].recipe.label}</h5>
            <p class="card-text">Source: ${data.hits[0].recipe.source}</p>
            <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Go to URL</a>
        </div>
    </div>
    `
}