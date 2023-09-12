import {
  Card,
  Image,
  TitleThumb,
  CardTitle,
  Accent,
  TagList,
  TagItem,
  Button,
} from './CatalogItem.styled';

const CatalogItem = ({ el }) => {
  const address = el.address.split(',');
  const city = address[1];
  const country = address[2];

  return (
    <Card>
      <div>
        <Image src={el.img} alt={`${el.make} ${el.model}`} width={240} />
        <TitleThumb>
          <CardTitle>
            {el.make} <Accent>{el.model}</Accent>, {el.year}
          </CardTitle>
          <p>{el.rentalPrice}</p>
        </TitleThumb>

        <TagList>
          <TagItem>{city}</TagItem>
          <TagItem>{country}</TagItem>
          <TagItem>{el.rentalCompany}</TagItem>
          <TagItem>{el.type}</TagItem>
          <TagItem>{el.make}</TagItem>
          <TagItem>{el.mileage}</TagItem>
          <TagItem>{el.accessories[2]}</TagItem>
        </TagList>
      </div>
      <Button type="button">Learn more</Button>
    </Card>
  );
};

export default CatalogItem;
