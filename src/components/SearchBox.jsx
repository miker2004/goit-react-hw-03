import { Formik, Form, Field } from "formik";

const SearchBox = ({ setFilter }) => {
  return (
    <>
      <h2>Find contacts by name</h2>
      <Formik
        initialValues={{ searchTerm: '' }} 
        onSubmit={(values) => {
          setFilter(values.searchTerm);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <Field
              type="text"
              name="searchTerm"
              placeholder="Search contacts"
              className="search-field"
              value={values.searchTerm} 
              onChange={(event) => {
                handleChange(event);
                setFilter(event.target.value);
              }}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default SearchBox;
