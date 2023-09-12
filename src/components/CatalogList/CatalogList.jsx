import CatalogItem from 'components/CatalogItem/CatalogItem';
import { List } from './CatalogList.styled';

const CatalogList = ({ data }) => {
  return (
    <List>{data && data.map(el => <CatalogItem key={el.id} el={el} />)}</List>
  );
};

export default CatalogList;
