import { useState, useEffect } from 'react';
import { DropdownContainer,Select, Option } from './styles'

export default function FilterDropdown({ genres, moviesData, setGenreId, genreId, setFilteredMovies, search }) {
    //console.log(genres)
    const movies = moviesData;
    const movieGenres = genres;
    const [selected, setSelected] = useState('selected');

    useEffect(() => {
        console.log(genreId)
        if (search !== '') {
            setSelected('selected')
        }
        const teste = moviesData.filter(m => m.genre_ids[0] === parseInt(genreId) || m.genre_ids[1] === parseInt(genreId))
        setFilteredMovies(teste)
    }, [genreId])

    return (
        <>
            <DropdownContainer>
                <Select onChange={(e) => setGenreId(e.target.value)}>
                    <Option selected={selected} value={0}>Qualquer Gênero</Option>
                    {movieGenres.map(gen => (
                        <Option value={gen.id}>{gen.name}</Option>
                    ))}
                </Select>
            </DropdownContainer>
        </>
    )
}