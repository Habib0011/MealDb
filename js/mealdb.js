const loadData = (searchValue) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}` 
    fetch(url)
    .then(res => res.json())
    .then(data => dataOperation(data.meals))
}

const dataOperation = meals =>{
    const allContainer = document.getElementById('all-container')
    allContainer.innerText ='';
 meals.forEach(meal =>{
    console.log(meal)
    const elementDiv = document.createElement('div')
    // elementDiv.classList.add('Flex')
    elementDiv.innerHTML =`
    <div class="flex">
        <div><img class="img-fluid" src="${meal.strMealThumb}" alt=""></div>
        <div class="text-margine">
                    <h2>${meal.strMeal}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem et itaque aliquam quia ipsa nulla eveniet earum fugiat ducimus dignissimos!
                </p>
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                View Details
              </button>
            </div>
        </div>
    
    
    `
    allContainer.appendChild(elementDiv)

    const modelInfo = document.getElementById('model-info')
    modelInfo.innerHTML =`
    <img class="img-fluid" src="${meal.strMealThumb}" alt="">
    <p>${meal.strInstructions}</p>
   

    `
    

    
 })
}
 const seacrhItem = () => {
    const searchValue = document.getElementById('search').value
    console.log(searchValue)
    loadData(searchValue)
    
 }
 
 


loadData('rice')