import { useState } from 'react';
import { Form, SelectThumb, Select, Icon } from './Filter.styled';
import makesList from 'resources/makes';

const prices = ['20', '30', '40', '50', '60', '70', '80', '90', '100+'];

const Filter = ({ onSubmit }) => {
  const [choosenBrand, setChoosenBrand] = useState();

  const onFormSubmit = async e => {
    e.preventDefault();

    onSubmit(choosenBrand.target.value);
    return;
  };

  return (
    <Form>
      <SelectThumb>
        <label htmlFor="car-select">Car brand</label>
        <Select name="cars" id="car-select" onChange={setChoosenBrand}>
          <option value="without">Please choose a brand</option>
          {makesList.map((el, index) => (
            <option key={index} value={el}>
              {el}
            </option>
          ))}
        </Select>
        <Icon />
      </SelectThumb>
      <SelectThumb>
        <label htmlFor="rent-price">Price/ 1 hour</label>
        <Select name="price" id="rent-price">
          <option value="without">Please choose a price</option>
          {prices.map((el, index) => (
            <option key={index} value={el}>
              {el}
            </option>
          ))}
        </Select>
        <Icon />
      </SelectThumb>
      <button type="submit" onClick={e => onFormSubmit(e)}>
        Search
      </button>
    </Form>
  );
};

export default Filter;
