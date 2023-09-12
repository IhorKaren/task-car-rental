import {
  Container,
  ModalImage,
  CardTitle,
  Accent,
  TagList,
  TagItem,
  Button,
} from '../CatalogItemModal/CatalogItemModal.styled';
const CatalogItemModal = ({ el, city, country }) => {
  return (
    <Container>
      <ModalImage src={el.img} />
      <CardTitle>
        {el.make} <Accent>{el.model}</Accent>, {el.year}
      </CardTitle>
      <TagList>
        <TagItem>
          <p>{city}</p>
        </TagItem>
        <TagItem>
          <p>{country}</p>
        </TagItem>
        <TagItem>
          <p>id: {el.id}</p>
        </TagItem>
        <TagItem>
          <p>Year: {el.year}</p>
        </TagItem>
        <TagItem>
          <p>Type: {el.type}</p>
        </TagItem>
        <TagItem>
          <p>Fuel Consumption: {el.fuelConsumption}</p>
        </TagItem>
        <TagItem>
          <p>Engine Size: {el.engineSize}</p>
        </TagItem>
      </TagList>
      <p>{el.description}</p>
      <h4>Accessories and functionalities:</h4>
      <TagList>
        {el.functionalities.map(string => {
          return <TagItem key={string}>{string}</TagItem>;
        })}
        {el.accessories.map(string => {
          return <TagItem key={string}>{string}</TagItem>;
        })}
      </TagList>
      <div>
        <h5>Rental Conditions: </h5>
        <p>{el.rentalConditions}</p>
      </div>

      <Button type="button">Rental car</Button>
    </Container>
  );
};

export default CatalogItemModal;
