import { useState } from 'react'
import logo from '../../logo.svg'
import Search from '../search'
import FilterDropdown from '../filter-dropdown'
import { HeaderContainer, SearchContainer, Logo } from './styles'

export default function Header({ genres, setSearch, setMovies, moviesData, setGenreId, genreId, setFilteredMovies, search }) {
    return (
        <HeaderContainer>
            <Logo src={logo}/>
            <SearchContainer>
                <Search setSearch={setSearch} />
                <FilterDropdown genres={genres} setMovies={setMovies} moviesData={moviesData} setGenreId={setGenreId} genreId={genreId} setFilteredMovies={setFilteredMovies} search={search} />
            </SearchContainer>
        </HeaderContainer>
    )
}