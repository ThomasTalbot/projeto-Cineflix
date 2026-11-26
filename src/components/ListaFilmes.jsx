import CardFilme from './CardFilme'
export default function ListaFilmes({movies}){return <div className="movie-grid">{movies.map((movie)=><CardFilme key={movie.imdbID} movie={movie}/>)}</div>}
