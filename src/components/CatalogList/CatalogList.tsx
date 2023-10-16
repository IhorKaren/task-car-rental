import { FC } from 'react';
import CatalogItem from 'components/CatalogItem/CatalogItem';
import { List } from './CatalogList.styled';

import { Car } from 'components/App.types';

type ListProps = {
  data: Car[];
};

const CatalogList: FC<ListProps> = ({ data }) => {
  return (
    <List className="CarsList">
      {data && data.map(el => <CatalogItem key={el.id} car={el} />)}
    </List>
  );
};

export default CatalogList;
