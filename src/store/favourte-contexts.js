import { createContext, useState } from "react";


const FavouriteContext = createContext({
    favourites: [],
    totalfavourites: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {}
});

export function FavouriteContextProvider(props) {
    const [userFavourites, setUserFavourites] = useState([]);
    

    function addFavouriteHandler(favouriteMeetup) {

        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteMeetup);
        });
    }

     function removeFavouriteHandler(meetupId) {
        setUserFavourites(prevUserFavourites => {
            return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
        });
     }
    

    function ItemsFavourteHandler(meetupId) {

        return userFavourites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favourites: userFavourites,
        totalfavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: ItemsFavourteHandler
    };


    return <FavouriteContext.Provider value={context}> 
        {props.children}
        </FavouriteContext.Provider>
}


export default FavouriteContext;