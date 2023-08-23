import PropTypes from 'prop-types';
import {
  ContactListContainer,
  ContactItem,
  ContactName,
  DeleteButton,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListContainer key={id}>
          <ContactItem>
            <ContactName>
              {name}: {number}
            </ContactName>
            <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
          </ContactItem>
        </ContactListContainer>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};