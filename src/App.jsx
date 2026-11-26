import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'
import './App.css'

export default function App() {
  return <BrowserRouter><div className="app-shell"><Header /><main><Routes><Route path="/" element={<Home />} /><Route path="/filmes" element={<Catalog />} /><Route path="/filme/:imdbID" element={<MovieDetails />} /><Route path="*" element={<NotFound />} /></Routes></main><Footer /></div></BrowserRouter>
}
