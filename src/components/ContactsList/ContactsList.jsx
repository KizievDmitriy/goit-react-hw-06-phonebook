import { useSelector } from 'react-redux';
import { Contacts } from './Contacts/Contacts';
import { ListContacts } from './ContacktsList.styled';

export const ContactsList = () => {
     
    const filter = useSelector(state => state.filter);
    const filteredContacts = useSelector(state =>
        state.contacts.filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
        )
  );
  
    return (
      <ListContacts>
        {filteredContacts.map(({ id, name, number }) => (
          <Contacts
            key={id}
            id={id}
            name={name}
            number={number}
          ></Contacts>
        ))}
      </ListContacts>
    );
  
}
