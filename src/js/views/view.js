import icons from 'url:../../img/icons.svg';
export default class  View{
    _data;
    render(data){
      if(!data  ||  Array.isArray(data) && data.length===0) return this.renderError();
        this._data=data;
        // console.log(this._generateMarkup());
        const markup = this._generateMarkup();
        this._clear();
        // recipeContainer.innerText='';
        this._parentELement.insertAdjacentHTML("afterbegin",markup);
        console.log(this._data);

    }

     _clear(){
        this._parentELement.innerHTML='';
     }
     renderSpinner(){
        const markup=`
        <div class="spinner">
                <svg>
                  <use href="${icons}#icon-loader"></use>
                </svg>
              </div> -->
        `;
        this._parentELement.innerHTML='';
        // parentEl.incertAdjacentHTML('afterbeing',markup);
        this._parentELement.insertAdjacentHTML("afterbegin",markup);

     }
    //  _errorDefault="sorry we couldn't find  the recipe ";
     renderError(errorMessage=this._errorMessage){
      const markup=`<div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${errorMessage}</p>
          </div> -->
      `;
      this._clear();
      // recipeContainer.innerText='';
      this._parentELement.insertAdjacentHTML("afterbegin",markup);
     }

}