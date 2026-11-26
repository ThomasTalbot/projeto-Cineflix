import { NavLink } from 'react-router-dom'
import Pesquisa from './Pesquisa'
export default function Header(){return <header className="header"><div className="container header-inner"><NavLink to="/" className="logo">CINE<span>FLIX</span></NavLink><nav className="nav"><NavLink to="/" end>Início</NavLink><NavLink to="/filmes">Catálogo</NavLink></nav><div className="header-search"><Pesquisa compact /></div></div></header>}
