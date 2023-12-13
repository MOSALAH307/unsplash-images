import { useGlobalContext } from "./Context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url =
  "https://api.unsplash.com/search/photos?client_id=8VM-JEu6TMKo1V8vtzLVEDKph3WOw73exRmqwp-W7PI";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["Images", searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchTerm}`);
      return response.data;
    },
  });

  // console.log(data);
  if (isLoading) {
    return (
      <section
        className="image-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="loading"></div>
      </section>
    );
  }

  if (isError) {
    return (
      <section
        className="image-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4>there was an error.</h4>
      </section>
    );
  }

  if (data.results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found.</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {data.results.map((result) => {
        const url = result.urls.regular;
        return (
          <img
            key={result.id}
            src={url}
            alt={result.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
