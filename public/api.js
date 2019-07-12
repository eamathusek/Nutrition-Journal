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


