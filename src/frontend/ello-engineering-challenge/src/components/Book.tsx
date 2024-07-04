import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import img1 from "../assets/image1.webp";

interface BookProps {
  book: {
    title: string;
    author: string;
    coverPhotoURL: string;
    readingLevel: string;
  };
}

const Book: React.FC<BookProps> = ({ book }) => {
  const { title, author, coverPhotoURL, readingLevel } = book;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={`/src/${coverPhotoURL}`}
        // image={img1}
        alt={title}
      />
      <CardContent>
        <Typography variant="h5"> {title}</Typography>
        <Typography paragraph>By {author}</Typography>
        <Typography paragraph>Reading Level {readingLevel}</Typography>
      </CardContent>
      {/* <div>
        <img src={img1} alt="hello" />
      </div> */}
    </Card>
  );
};

export default Book;
