import { Grid } from "@mui/material";
import Book from "./Book";

interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
}

interface Props {
  books: Book[];
}

const ReadingList: React.FC<Props> = ({ books }) => {
  console.log(books);
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "primary.main",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10rem",
      }}
    >
      {books.map((book, index) => (
        <Grid item key={index}>
          <Book book={book} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ReadingList;
