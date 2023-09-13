import {
  Container,
  CloseModal,
  CloseIcon,
  ModalImage,
  Thumb,
  ModalTitle,
  Accent,
  TagList,
  TagItem,
  Decription,
  Text,
  ConditionList,
  ConditionItem,
  Button,
} from '../CatalogItemModal/CatalogItemModal.styled';

const CatalogItemModal = ({ el, city, country, addComma, closeModal }) => {
  const rentalConditions = el.rentalConditions.split('\n');

  return (
    <Container>
      <CloseModal
        type="button"
        onClick={closeModal}
        aria-label="Close modal window"
      >
        <CloseIcon />
      </CloseModal>
      <ModalImage src={el.img} />
      <ModalTitle>
        {el.make} <Accent>{el.model}</Accent>, {el.year}
      </ModalTitle>
      <Thumb>
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
        <Decription>{el.description}</Decription>
        <div>
          <Text>Accessories and functionalities:</Text>
          <TagList>
            {el.functionalities.map((string, index) => (
              <TagItem key={index}>{string}</TagItem>
            ))}
            {el.accessories.map((string, index) => (
              <TagItem key={index}>{string}</TagItem>
            ))}
          </TagList>
        </div>
        <div>
          <Text>Rental Conditions: </Text>
          <ConditionList>
            {rentalConditions.map((condition, index) => (
              <ConditionItem key={index}>
                <p>{condition}</p>
              </ConditionItem>
            ))}
            <ConditionItem>
              <p>Milage: {addComma(el.mileage)}</p>
            </ConditionItem>
            <ConditionItem>
              <p>Price: {el.rentalPrice}</p>
            </ConditionItem>
          </ConditionList>
        </div>
      </Thumb>

      <Button href="tel:+380730000000" rel="noopener">
        Rental car
      </Button>
    </Container>
  );
};

export default CatalogItemModal;
