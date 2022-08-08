
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { change } from 'redux/filter';
import { FilterTitle, FilterLabel, FilterInput } from './Filter.styled';

export const Filter=()=>{
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  
    return (
      <>
        <FilterLabel>
          <FilterTitle>Find contacts by name</FilterTitle>
          <FilterInput type="text" value={filter} onChange={e => dispatch(change(e.target.value))} />
        </FilterLabel>
      </>
    );
}
// Filter.propTypes = {
//     onChange: PropTypes.func.isRequired,
//     value: PropTypes.string.isRequired,
//   };