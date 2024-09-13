import View from "./view";
import icons from 'url:../../img/icons.svg';

// class PaginationView extends View{
//     _parentELement = document.querySelector('.pagination');
//     _generateMarkup(){
        

//         const curPage=this._data.page;
//         const numPages=Math.ceil(this._data.result.length /this._data.resultPerPage);
//         console.log(numPages);
//         if(curPage ===1 && numPages > 1){
//             return `
           
//             <button class="btn--inline pagination__btn--next">
//                 <span>page${curPage +1}</span>
//                 <svg class="search__icon">
//                 <use href="${icons}#icon-arrow-right"></use>
//                 </svg>
//             </button>
//           `;
            
//         }
//         if(curPage === numPages  && numPages >1){
//             return `
//             <button class="btn--inline pagination__btn--prev">
//                 <svg class="search__icon">
//                 <use href="${icons}#icon-arrow-left"></use>
//                 </svg>
//                 <span>page${curPage-1}</span>
//             </button>
           
//           `;
//         }
//         if(curPage < numPages){
//             return `
//             <button class="btn--inline pagination__btn--prev">
//                 <svg class="search__icon">
//                 <use href="${icons}#icon-arrow-left"></use>
//                 </svg>
//                 <span>page${curPage-1}</span>
//             </button>
//             <button class="btn--inline pagination__btn--next">
//                 <span>page${curPage+1}</span>
//                 <svg class="search__icon">
//                 <use href="${icons}#icon-arrow-right"></use>
//                 </svg>
//             </button>
//           `;

//         }

//         return "";
        
//     }
//     _generateMarkupButton(){

//     }

// }

class PaginationView extends View {
    _parentELement = document.querySelector('.pagination');

    addHandlerClick(handler){
      this._parentELement.addEventListener('click',function(e){
        const btn=e.target.closest('.btn--inline');
        if(!btn) return;
        console.log(btn);
        const gotoPage= +btn.dataset.goto;
        console.log(gotoPage);
        handler(gotoPage);
      })
    }
  
    _generateMarkup() {
      const curPage = this._data.page;
      const numPages = Math.ceil(this._data.result.length / this._data.resultPerPage);
      
      if (curPage === 1 && numPages > 1) {
        return this._generateMarkupButton(curPage + 1, 'next');
      }
  
      if (curPage === numPages && numPages > 1) {
        return this._generateMarkupButton(curPage - 1, 'prev');
      }
  
      if (curPage < numPages) {
        return `
          ${this._generateMarkupButton(curPage - 1, 'prev')}
          ${this._generateMarkupButton(curPage + 1, 'next')}
        `;
      }
  
      return "";
    }
  
    _generateMarkupButton(page, direction) {
      return `
            <button data-goto=${page} class="btn--inline pagination__btn--${direction}">
            ${direction ==='prev' ?

                ` <svg class="search__icon">
                 <use href="${icons}#icon-arrow-left"></use>
                 </svg>
                 <span>page${page}</span>
                 `
                 :
                 `
                 <span>page${page}</span>
                 <svg class="search__icon">
                 <use href="${icons}#icon-arrow-right"></use>
                 </svg> `
            
            
                 
            }
             </button>
      `;
    
    }
  }
  
export default new PaginationView();