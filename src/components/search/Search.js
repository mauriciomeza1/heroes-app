import {useNavigate, useLocation} from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from "../../selectors/getHeroesByName"
import { HeroCard } from "../hero/HeroCard"
import { useForm } from "../hooks/UseForm"


export const Search = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const {q = ''} = queryString.parse(location.search)

  const [formValues, handleInputChange] = useForm({
    searchText: q
  })

  const {searchText} = formValues
  const heroesFiltered = getHeroesByName(q)

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText}`)
  }
  
  return (
    <>
      <h1>Búsquedas</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Search</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={handleInputChange}
            />

            <button 
              className="btn btn-primary mt-1"
              type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />


          {
            (q === '')
               ? <div className='alert alert-info'>Search a hero</div>
               :  (heroesFiltered.length === 0)
                && <div className='alert alert-danger'>No results for: { q } </div>
          }


          {
            heroesFiltered.map(hero=> (
              <HeroCard 
                key={hero.id}
                {...hero}
              />
            ))
          }

        </div>

      </div>
    </>
  )
}