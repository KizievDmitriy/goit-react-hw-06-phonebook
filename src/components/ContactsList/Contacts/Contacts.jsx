import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts';
import { ItemContact, DeleteBtn } from './Contacts.styled';



export const Contacts = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ItemContact>
      {name}: {number}
      <DeleteBtn onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </DeleteBtn>
    </ItemContact>
  );
};

Contacts.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
