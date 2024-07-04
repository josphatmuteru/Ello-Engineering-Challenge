import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { IconButton, InputAdornment } from "@mui/material";
import { Cancel, CancelOutlined, Search } from "@mui/icons-material";

export default function Searchbar({ searchOptions }) {
  const { books } = searchOptions;

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      {/* <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={books.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      /> */}
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        sx={{ width: 420 }}
        options={books.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            sx={{ borderRadius: 5 }}
            InputProps={{
              ...params.InputProps,
              type: "search",
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="clear input" edge="end">
                    <CancelOutlined />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </Stack>
  );
}
