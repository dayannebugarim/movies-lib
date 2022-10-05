import { DropdownContainer,Select, Option } from './styles'

export default function FilterDropdown() {
    return (
        <>
            <DropdownContainer>
                <Select>
                    <Option value={0}>Ação</Option>
                    <Option value={1}>Aventura</Option>
                </Select>
            </DropdownContainer>
        </>
    )
}