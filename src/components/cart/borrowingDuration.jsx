import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateBook } from '../../redux/action';

const BorrowingDuration = ({id}) => {

const dispatch=useDispatch();

const book = useSelector((state) => state.books.books.find((book) => book.id === id));

const [value, setValue] = useState(book.borrowingDuration || 5);

const handleChange = (_, newValue) => {
  setValue(newValue);
  const returnDate = new Date(Date.now() + newValue * 24 * 60 * 60 * 1000);
  const returnDateString = returnDate.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\//g, '-');
  const updatedBook = { ...book, restoreDate: returnDateString };
  dispatch(updateBook(updatedBook));
  };

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        aria-label="day"
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        shiftStep={1}
        step={1}
        marks
        min={2}
        max={30}
        sx={{
          fontFamily: 'Edu VIC WA NT Beginner',
          fontSize: 18,
          '& .MuiSlider-track': {
            backgroundColor: 'white',
          },
          '& .MuiSlider-thumb': {
            color: 'white',
            '&:hover': {
              boxShadow: '0px 0px 0px 8px rgba(255, 255, 255, 0.5)',
            },
          },
          '& .MuiSlider-rail': {
            backgroundColor: 'white',
          },
        }}
      />
    </Box>
  );
};

export default BorrowingDuration;