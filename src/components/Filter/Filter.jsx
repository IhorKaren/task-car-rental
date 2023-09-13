import { useState } from 'react';
import {
  Form,
  Label,
  SelectThumb,
  Select,
  Icon,
  Button,
} from './Filter.styled';
import makesList from 'resources/makes';

const Filter = ({ onSubmit }) => {
  const [choosenBrand, setChoosenBrand] = useState();

  const onFormSubmit = e => {
    e.preventDefault();

    onSubmit(choosenBrand.target.value);
    return;
  };

  return (
    <Form>
      <SelectThumb>
        <Label htmlFor="car-select">Car brand</Label>
        <Select name="cars" id="car-select" onChange={setChoosenBrand}>
          <option value="without">All cars</option>
          {makesList.map((el, index) => (
            <option key={index} value={el}>
              {el}
            </option>
          ))}
        </Select>
        <Icon />
      </SelectThumb>
      <Button type="submit" onClick={e => onFormSubmit(e)}>
        Search
      </Button>
    </Form>
  );
};

export default Filter;
