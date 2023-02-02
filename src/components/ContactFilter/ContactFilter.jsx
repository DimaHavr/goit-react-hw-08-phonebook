import Box from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { FilterBox, FilterLabel, SubTitle } from './ContactFilter.styled';
import { setFilter, getFilter } from 'redux/filterSlice';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <Box>
      <SubTitle>Contacts:</SubTitle>
      <FilterBox>
        <FilterLabel>
          <p>Find contacts by name:</p>
          <input
            value={filter}
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => dispatch(setFilter(e.target.value))}
          />
        </FilterLabel>
      </FilterBox>
    </Box>
  );
};

export default ContactFilter;
