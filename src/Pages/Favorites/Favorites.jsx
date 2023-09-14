import { useState, useEffect } from 'react';
import { useGetFavoritesQuery } from 'redux/cars/carsApi';
import CatalogList from 'components/CatalogList/CatalogList';
import { Message } from './Favorites.styled';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

const Favorites = () => {
  const [page, setPage] = useState(1);
  const [favoritesList, setFavoritesList] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const { data = [] } = useGetFavoritesQuery({ page, limit: 8 });

  useEffect(() => {
    if (isFirstRender) {
      setFavoritesList([]);
      return setIsFirstRender(false);
    }

    if (data && data.length > 0) {
      setFavoritesList(prevState => [...prevState, ...data]);
      return;
    }
  }, [data, isFirstRender]);

  useEffect(() => {
    const list = document.querySelector('ul');
    const lastImage = list.lastElementChild;

    if (favoritesList.length > 8) {
      const { height: cardHeight } = lastImage.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 1,
        behavior: 'smooth',
      });
    }
  }, [favoritesList]);

  const loadMoreBtnClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const onItemWillRemoved = el => {
    if (el) {
      const filteredArray = favoritesList.filter(car => car.id !== el);
      setFavoritesList([...filteredArray]);
    }
  };

  return (
    <>
      <h1 className="visually-hidden">Favorites</h1>
      {favoritesList.length === 0 ? (
        <>
          <Message>You have not added any cars to your favorites yet.</Message>
          <CatalogList data={[]} />
        </>
      ) : (
        <CatalogList data={favoritesList} removeItem={onItemWillRemoved} />
      )}
      {data.length > 7 && <LoadMoreBtn onClick={loadMoreBtnClick} />}
    </>
  );
};

export default Favorites;
