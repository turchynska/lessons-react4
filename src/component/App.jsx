import { useEffect, useState} from 'react'
import './App.css'
import { fetchArticlesWithTopic } from '../articles-api';
import { SearchForm } from './SearchForm/SearchForm';
import ArticleList from "./ArticleList/ArticleList"
import Error from './Error/Error';
import Loader from './Loader/Loader';

export function  App() {
  //оголошуємо стан
const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(false);
const [color, setColor] = useState('#000000'); 
const [error, setError] = useState(false);

const handleSearch = async(topic) => {
    try {
    setArticles([]);
    setError(false);
     //Встановлюємо індикатор в true перед запитом
    setLoading(true);
    // Використовуємо HTTP-функцію
    const data = await fetchArticlesWithTopic(topic);
     //записуємо дані в стан 
    setArticles(data);
    } catch (error) {
     // Тут будемо обробляти помилку
     // Встановлюємо стан error в true
   setError(true)
    } finally {
      // Встановлюємо індикатор в false після запиту
      setLoading(false);
    }
}
//якщо ми хочемо зробити запит на бекенд під час монтування компоненнта ( використовуємо асинхронну функцію з useEffect)
// useEffect(() => {
//   //викликаємо асинхронну функцію
//   async function fetchArticles() {
//   try {
//     //Встановлюємо індикатор в true перед запитом
//     setLoading(true);
//     // Використовуємо HTTP-функцію
//   const data = await fetchArticlesWithTopic("react");
//     //записуємо дані в стан 
//     setArticles(data)
//   }catch(error) {
//      // Тут будемо обробляти помилку
//      // Встановлюємо стан error в true
//      setError(true)
//   } finally {
//     // Встановлюємо індикатор в false після запиту
//     setLoading(false);
//   }
//   }
//   //викликаємо асинхронну функцію одразу після її оголошення
//   fetchArticles();
// }, []);

return (
  <div className="sweet-loading">
    <h1>Latest articles</h1>
    <SearchForm onSearch={handleSearch}/>
    {loading && <Loader/>}
    {error && <Error/>}
    {articles.length > 0 && <ArticleList items={articles} />}
  </div>
);
};
export default App;