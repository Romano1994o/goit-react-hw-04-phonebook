import PropTypes from 'prop-types';
import {
  FilterContainer,
FilterLabel,
FilterInput,
} from './Filter.styled';

export const Filter = ({ onChange }) => {
  return (
    <FilterContainer>
      <FilterLabel>
        Find contacts by name
        <FilterInput 
        type="text" 
        placeholder="Type a name to search"
        name="filter" 
        onChange={onChange} />
      </FilterLabel>
    </FilterContainer>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};