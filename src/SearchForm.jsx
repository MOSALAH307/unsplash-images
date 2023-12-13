import { useGlobalContext } from "./Context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(event.target.elements.search.value);
    const seachValue = event.target.elements.search.value;
    if (seachValue.trim().length === 0) {
      return;
    }
    setSearchTerm(seachValue);
    // console.log(seachValue);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form onSubmit={submitHandler} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="cat"
          name="search"
        />
        <button className="btn">search</button>
      </form>
    </section>
  );
};

export default SearchForm;
