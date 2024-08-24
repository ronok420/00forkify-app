// import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
// console.log(icons);


// const recipeContainer = document.querySelector('.recipe');





// const renderSpinner = function (parentEl){
//   const markup=`
//   <div class="spinner">
//           <svg>
//             <use href="${icons}#icon-loader"></use>
//           </svg>
//         </div> -->
//   `;
//   parentEl.innerHTML='';
//   // parentEl.incertAdjacentHTML('afterbeing',markup);
//   parentEl.insertAdjacentHTML("afterbegin",markup);
// };



// https://forkify-api.herokuapp.com/v2
const showRecipe = async function(){
  try{
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
    alert(err);

  }
}

// showRecipe();
// window.addEventListener('hashchange',showRecipe);
// window.addEventListener('load',showRecipe);
//  ['hashchange','load'].forEach(ev=>window.addEventListener(ev,showRecipe));
for (const ev of ['hashchange', 'load']) {
  window.addEventListener(ev, showRecipe);
}


///////////////////////////////////////




// {
//   "name": "forkify",
//   "version": "1.0.0",
//   "description": "recipe app",
//   "main": "index.html",
//   "scripts": {
//     "start": "parcel index.html",
//     "build": "parcel build index.html --dist-dir ./dist"
//   },
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "parcel": "^2.12.0",
//     "sass": "^1.77.8"
//   }
// }
