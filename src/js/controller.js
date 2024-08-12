import icons from 'url:../img/icons.svg';
console.log(icons);


const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
console.log('hi')



const renderSpinner = function (parentEl){
  const markup=`
  <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div> -->
  `;
  parentEl.innerHTML='';
  // parentEl.incertAdjacentHTML('afterbeing',markup);
  parentEl.insertAdjacentHTML("afterbegin",markup);
};



// https://forkify-api.herokuapp.com/v2
const showRecipe = async function(){
  try{
    renderSpinner(recipeContainer);
  //  const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e86af`);
   const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`);
   const data = await res.json();
   if(!res.ok) throw new Error( `${data.message} (${res.status})`);
   console.log(res,data);
   console.log(data.data.recipe);
   let {recipe} =data.data;
   const markup =`
    <figure class="recipe__fig">
          <img src="${recipe.image_url}" alt="${recipe.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.cooking_time}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${recipe.ingredients.map(ing=>{  
            return ` <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${icons}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${ing.quantity}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
              </div>
            </li>`;
           

          }).join('')}
         

          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
          href="${recipe.source_url}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
   `;
   recipeContainer.innerText='';
   recipeContainer.insertAdjacentHTML("afterbegin",markup);


  }
  catch(err){
    alert(err);

  }
}
showRecipe();

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
