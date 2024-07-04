import { useQuery, gql } from "@apollo/client";
import Searchbar from "./components/Searchbar";

import { Container, Typography, CircularProgress } from "@mui/material";
import ReadingList from "./components/ReadingList";

const HELLO_QUERY = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;
const App: React.FC = () => {
  const { loading, error, data } = useQuery(HELLO_QUERY);

  if (loading)
    return (
      <p>
        <CircularProgress />
      </p>
    );
  if (error) return <p>Error :(</p>;

  const { books } = data;
  return (
    <div className="App">
      <Container>
        <h1>Ello</h1>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <Searchbar searchOptions={data} />
        </div>
        <ReadingList books={books} />
      </Container>
    </div>
  );
};

export default App;
