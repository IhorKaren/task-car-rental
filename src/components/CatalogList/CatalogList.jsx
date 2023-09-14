import CatalogItem from 'components/CatalogItem/CatalogItem';
import { List } from './CatalogList.styled';

const CatalogList = ({ data, removeItem }) => {
  return (
    <List className="CarsList">
      {data &&
        data.map(el => (
          <CatalogItem key={el.id} car={el} removeItem={removeItem} />
        ))}
    </List>
  );
};

export default CatalogList;
