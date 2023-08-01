import React from 'react'
import '../App';
import { useAppContext } from './context/appContext';
const Favorite = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  console.log("favorites are", favorites);


  const favoritechecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };
  return (
    <div className='favorites'>
      {favorites.length>0 ? favorites.map((book) => (
        <div key={book.id} className='book'>
          <div className='fontdecor'><h2>{book.title}</h2></div>
          <div><img src={book.image_url} alt="#"></img></div>
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
      )): <h1>U dont have any favorite books yet</h1>}
    </div>
  )
};

export default Favorite
