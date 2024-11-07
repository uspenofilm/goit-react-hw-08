import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contactListContainer}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact data={contact} handleDelete={onDeleteContact} />
          </li>
        );
      })}
    </ul>
  );
}
