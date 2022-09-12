import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MdOutlineImageSearch } from "react-icons/md";
import { SearchbarStyled, SearchButton, SearchForm, SearchInput } from "./Searchbar.styled"

export const Searchbar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchInput = useRef();
    
    useEffect(() => {
        const query = searchParams.get('query');
        if (query) {
            searchInput.current.value = query;
        }
    },[searchParams])
    
    const setQuery = (e) => {
        e.preventDefault();
        const query =  e.target.elements.searchInput.value.trim();
        query ? setSearchParams({ query }) : setSearchParams({ });
    }
    
    return (
        <SearchbarStyled>
            <SearchForm onSubmit={setQuery}>
                <SearchButton type="submit">
                    <MdOutlineImageSearch size={24} />
                </SearchButton>

                <SearchInput
                    name="searchInput"
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search movies"
                    ref={searchInput}
                />
            </SearchForm>
        </SearchbarStyled>
    )
}

