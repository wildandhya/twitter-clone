import React, {useState, useEffect} from "react";
import {InputGroup, FormControl} from "react-bootstrap";
import {getTweet} from '../store/Home/action'
import {useDispatch} from 'react-redux'
import '../styles/SearchBar.scss'
function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("")

  useEffect(() => {
    getTweet(dispatch, {search:search, sort:""})
  }, [search])
  return (
    <div>
      <InputGroup className="mb-3 search-bar">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm"><i class="bi bi-search"></i></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Search Twitter"
          onChange={(e)=>{
            setSearch(e.target.value)
          }}
        />
      </InputGroup>
    </div>
  );
}

export default SearchBar;
