import Contact from "./Contact";

const ContactList = ({ contacts, deleteFromList }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} deleteFromList={deleteFromList} />
      ))}
    </div>
  );
};

export default ContactList;
