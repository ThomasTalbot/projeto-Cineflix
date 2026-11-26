const categories=['Todos','Ação','Aventura','Comédia','Drama','Terror','Ficção científica']
export default function Categorias({active,onChange}){return <div className="categories">{categories.map((category)=><button type="button" className={`category ${active===category?'active':''}`} onClick={()=>onChange(category)} key={category}>{category}</button>)}</div>}
