class SearchView{
    _parentEl=document.querySelector('.search');
    getQuery(){
        const query= this._parentEl.querySelector('.search__field').value;
        this._cleatInput();
        return query;
    }
    _cleatInput(){
        this._parentEl.querySelector('.search__field').value='';

    }
    addHandlerSearch(handler){
        this._parentEl.addEventListener('submit',function(e){
            e.preventDefault();
            handler();
        })

    }

}
export default new SearchView();