import { useState } from 'react';

function SearchBar({ submitForm }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    // submitting term and send it to API function everytime user click search button
    event.preventDefault();
    submitForm(term);
    setTerm('');
  }
  const handleChange = (event) => {
    // update term everytime user type a letter
    setTerm(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {/* term also change the input value everytime, so its kinda loop, but its good when we need to filter the term, for instance, to only accept number, then we just have to put filter on handleChange function, the input form the automatically wont show a-z if we typed it  */}
        <input value={term} onChange={handleChange} />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;
