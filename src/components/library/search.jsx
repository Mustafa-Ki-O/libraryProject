import { useState ,useEffect} from 'react';
import '../../assets/css/search.css'
import { Container } from '@mui/material';

const Search = ({books,setFilteredBooks}) => {

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const filteredBooks = books.filter((book) => {
      const title = book.title.toLowerCase();
      const author = book.author.toLowerCase();
      const description = book.description.toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();

      return (
        title.includes(searchTermLower) ||
        author.includes(searchTermLower) ||
        description.includes(searchTermLower)
      );
    });
    setFilteredBooks(filteredBooks);
  }, [searchTerm, books]);


  return (
    <Container sx={{marginBottom:6,display:'flex',justifyContent:'flex-start'}}>

    <input
          id='search'
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for books..."
        />
    </Container>
  );
};

export default Search;