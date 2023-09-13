import { useGetFavoritesQuery } from 'redux/cars/carsApi';
import CatalogList from 'components/CatalogList/CatalogList';

const Favorites = () => {
  const { data = [] } = useGetFavoritesQuery();

  return (
    <>
      <h1 className="visually-hidden">Favorites</h1>
      <CatalogList data={data} />
    </>
  );
};

export default Favorites;
