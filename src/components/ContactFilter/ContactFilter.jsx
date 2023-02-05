import Box from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import {
  FilterBox,
  FilterInput,
  SubTitle,
  InputContainer,
  FilterIcon,
} from './ContactFilter.styled';
import { setFilter, getFilter } from 'redux/filter/filterSlice';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <SubTitle>Contacts:</SubTitle>
      <FilterBox>
        <InputContainer>
          <FilterIcon />
          <FilterInput
            placeholder="Find contacts by name:"
            value={filter}
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => dispatch(setFilter(e.target.value))}
          />
        </InputContainer>
      </FilterBox>
    </Box>
  );
};

export default ContactFilter;
