import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { Toaster } from 'react-hot-toast';


const Contacts = () => {
  console.log(useGetContactsQuery());
  const { data: contacts, isError, isLoading } = useGetContactsQuery();
  console.log(contacts);

  // useEffect(() => {
  //   // dispatch(fetchTasks());
  //   // const { data: contacts, isError, isLoading } = useGetContactsQuery();
  //   console.log(contacts);
  // }, []);

  return (
    <>
      <h1>Phonebook</h1>
      <Form />

      {isError && <p>Things went south.. =( Please try again.</p>}
      {isLoading ? (
        <p>Contacts are loading...</p>
      ) : (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList contacts={contacts} />
        </>
      )}
      <Toaster />
    </>
  );
};

export default Contacts;
