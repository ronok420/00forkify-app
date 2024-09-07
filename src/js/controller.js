// import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

// console.log(icons);


// const recipeContainer = document.querySelector('.recipe');




// https://forkify-api.herokuapp.com/v2
const showRecipe = async function(){
  try{
    console.log(window.location.hash);
    const id= window.location.hash.slice(1);
   if(!id) return;
   
    // renderSpinner(recipeContainer);
    recipeView.renderSpinner();
  
   // loading recipe
  await model.loadRecipe(id);
 const  { recipe }= model.state;


 //rendering recipeView
 recipeView.render( recipe);


  


  }
  catch(err){
    // alert(err);
    recipeView.renderError(`${err} 🤬😡😠😡🤬`);
   

  }
}


const controlSearchResult = async function(){
  try{
    resultsView.renderSpinner();
    console.log(resultsView);
    
    const query = searchView.getQuery();
    if(!query) return;
   await model.loadSearchResult(query);
   resultsView.render(model.state.search.result);
  //  console.log(model.state.search.result);
  }catch(err){
  console.log(err);
  }
  }
  // controlSearchResult();


// showRecipe();
// window.addEventListener('hashchange',showRecipe);
// window.addEventListener('load',showRecipe);
//  ['hashchange','load'].forEach(ev=>window.addEventListener(ev,showRecipe));


// for (const ev of ['hashchange', 'load']) {
//   window.addEventListener(ev, showRecipe);
// }
const  init = function(){
  recipeView.addHandlerRender(showRecipe);
  searchView.addHandlerSearch(controlSearchResult);
}
init();



