import React, { useEffect, useState } from 'react'
import '../App';
import { API_URL } from '../api';
import axios from 'axios';
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router-dom';
const Booklists = () => {


  const [books, setBooks] = useState([]);
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
 const navigate=useNavigate();


  const favoritechecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };
  useEffect(() => {
    axios.get(API_URL).then(res => {
      console.log(res.data);
      setBooks(res.data);
    })

  }, []);

  return (
    <div className='book-list'>
      {books.map((book) => (
        <div key={book.id} className='book'>
          <div className='fontdecor'><h2>{book.title}</h2></div>
          <div><img src={book.image_url} alt="#" onClick={()=>navigate(`/books/${book.id}`)}/>
            </div>
          <div>
            {
              favoritechecker(book.id) ?
                (<button onClick={() => removeFromFavorites(book.id)}><h2>Remove from Favorites
                </h2></button>) :

                (<button onClick={() => addToFavorites(book)}><h2>Add to Favorites</h2>
                </button>
                )}

          </div>
        </div>
      ))}
    </div>

  )
};

export default Booklists
