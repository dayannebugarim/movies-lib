import { SearchContainer, SearchInput } from './styles'

export default function Search({ setSearch }) {
    return (
        <SearchContainer>
            <SearchInput type="search" placeholder='Pesquise por um filme' onChange={(e) => setSearch(e.target.value)} />
        </SearchContainer>
    )
}