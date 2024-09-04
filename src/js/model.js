import { API_URL } from "./config";
import { getJSON } from "./helper";

export const  state ={
    recipe:{

    },
    search:{
        query:'',
        result:[]
    }
}



export const  loadRecipe = async function(id) {
    try{
         //  const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e86af`);
  //  const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`);


  //previous  one     alternate  
//    const res = await fetch(`${API_URL}/${id}`);
//    const data = await res.json();
//    if(!res.ok) throw new Error( `${data.message} (${res.status})`);




    const data = await  getJSON(`${API_URL}/${id}`);

   console.log(data);
   console.log(data.data.recipe);
   let {recipe} =data.data;
   state.recipe=recipe;

    }
    catch(err){
        // alert(err);
        // console.error(`${err}`);

       throw err;

    }

   

    
} 
export const  loadSearchResult = async function(query){
    try{
        state.search.query=query;
        // https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza
        const data = await getJSON(`${API_URL}/?search=${query}`);
        console.log(data);
        state.search.result=data.data.recipes.map(rec=>{
            return{
                id:rec.id,
                title:rec.title,
                publisher:rec.publisher,
                image:rec.image_url

            };
        })
    //    console.log(state.search.result);

    }
    catch(err){
        console.log(err);
        
    }
}
// loadSearchResult("pizza");