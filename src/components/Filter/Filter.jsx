import { FilterContainer, Input } from "./Filter.styled"

export function Filter({filter, handleFilterChange}) {
    return (
        <FilterContainer>
            <h3>Фільтр по імені</h3>
            <Input type="text" name="filter" value={filter} onChange={handleFilterChange}/>
        </FilterContainer>
    )
}