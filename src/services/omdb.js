const API_URL = 'https://www.omdbapi.com/'
const apiKey = import.meta.env.VITE_OMDB_API_KEY
function checkKey(){if(!apiKey)throw new Error('Configure uma VITE_OMDB_API_KEY no arquivo .env para consultar a OMDb.')}
async function request(params){checkKey();const query=new URLSearchParams({apikey:apiKey,...params});let response;try{response=await fetch(`${API_URL}?${query}`)}catch{throw new Error('Não foi possível conectar à OMDb. Verifique sua internet e tente novamente.')}if(!response.ok)throw new Error('A OMDb não respondeu corretamente. Tente novamente em instantes.');const data=await response.json();if(data.Response==='False')throw new Error(data.Error||'Nenhum filme foi encontrado.');return data}
export const getMovie=(imdbID)=>request({i:imdbID,plot:'full'})
export const searchMovies=(title,page=1)=>request({s:title,type:'movie',page})
export async function getCatalogMovies(){const terms=['action','adventure','comedy','drama','horror','science fiction'];const searches=await Promise.all(terms.map((term)=>searchMovies(term)));const ids=[...new Set(searches.flatMap((result)=>result.Search.map((movie)=>movie.imdbID)))].slice(0,18);const movies=await Promise.all(ids.map((id)=>getMovie(id)));return movies.filter((movie)=>movie.Type==='movie')}
