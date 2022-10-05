import logo from '../../logo.svg'
import Search from '../search'
import FilterDropdown from '../filter-dropdown'
import { HeaderContainer, SearchContainer, Logo } from './styles'

export default function Header() {
    return (
        <HeaderContainer>
            <Logo src={logo}/>
            <SearchContainer>
                <Search />
                <FilterDropdown />
            </SearchContainer>
        </HeaderContainer>
    )
}