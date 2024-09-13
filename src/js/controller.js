// import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';


// console.log(icons);


// const recipeContainer = document.querySelector('.recipe');



if(module.hot){
  module.hot.accept();
}
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
  //  resultsView.render(model.state.search.result);

   resultsView.render(model.getSearchResultPage(1));

  //  console.log(model.state.search.result);

  //render  pagination view
  paginationView.render(model.state.search);
  console.log(model.state.search);

  }catch(err){
  console.log(err);//conosle
  }
  }
  // controlSearchResult();


// showRecipe();
// window.addEventListener('hashchange',showRecipe);
// window.addEventListener('load',showRecipe);
//  ['hashchange','load'].forEach(ev=>window.addEventListener(ev,showRecipe));



const controlPagination= function(gotoPage){
  resultsView.render(model.getSearchResultPage(gotoPage));
  paginationView.render(model.state.search);
  
}
const  init = function(){
  recipeView.addHandlerRender(showRecipe);
  searchView.addHandlerSearch(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);
}
init();



