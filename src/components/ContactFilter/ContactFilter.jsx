import Box from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { FilterBox, FilterInput, SubTitle } from './ContactFilter.styled';
import { setFilter, getFilter } from 'redux/filter/filterSlice';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <Box>
      <SubTitle>Contacts:</SubTitle>
      <FilterBox>
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
      </FilterBox>
    </Box>
  );
};

export default ContactFilter;
