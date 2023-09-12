import { useGetCarsQuery } from 'redux/cars/carsApi';
import CatalogList from 'components/CatalogList/CatalogList';

const Catalog = () => {
  const { data = [] } = useGetCarsQuery();

  console.log(data);

  return (
    <>
      <h1>Catalog</h1>
      <CatalogList data={data} />
    </>
  );
};

export default Catalog;
