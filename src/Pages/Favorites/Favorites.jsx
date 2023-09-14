import { useGetFavoritesQuery } from 'redux/cars/carsApi';
import CatalogList from 'components/CatalogList/CatalogList';
import { Message } from './Favorites.styled';

const Favorites = () => {
  const { data = [] } = useGetFavoritesQuery();

  return (
    <>
      <h1 className="visually-hidden">Favorites</h1>
      {data.length === 0 ? (
        <Message>You have not added any cars to your favorites yet.</Message>
      ) : (
        <CatalogList data={data} />
      )}
    </>
  );
};

export default Favorites;
