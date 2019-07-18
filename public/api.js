// const baseurl = "https://wger.de/api/v2/";

// async function fetchApi(url){
//     const response = await fetch(baseurl + url);
//     const data = await response.json();
//     console.log(data);
//     return data;
// }
// // fetchApi("exercise");

// async function listWorkout(){
//   const workouts = await fetchApi("meal");
//   const elementList = document.getElementById("meal");
//   workouts.results.forEach(element => {
//     elementList.appendChild(renderExercise(element))
//   });
// }

// function renderExercise(owrkout){
//   const item = document.createElement("li");
//   item.innerHTML = `name:${meal.name}`;
//   //item.addEventListener('click');
//   return item;
// }

// listWorkout();


const baseurl = "https://www.themealdb.com/api/json/v1/1/search.php";

async function fetchApi(url){
    const response = await fetch(baseurl + url);
    const data = await response.json();
    console.log(data);
    return data;
}
// fetchApi("exercise");

async function listWorkout(){
  const workouts = await fetchApi("meals");
  const elementList = document.getElementById("meals");
  workouts.results.forEach(element => {
    elementList.appendChild(renderExercise(element))
  });
}

function renderExercise(owrkout){
  const item = document.createElement("li");
  item.innerHTML = `name:${meals.name}`;
  //item.addEventListener('click');
  return item;
}

listWorkout();


unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&type=main+course&query=burger")
.header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
.header("X-RapidAPI-Key", "af42b18fbdmsh5cea9dcbd511d68p1add7fjsn750c5b4f114a")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});