import { HeroList } from "../hero/HeroList"
export const Dc = (publisher) => {
  return (
    <div>
        <h1>DC</h1>
        <hr />
        <HeroList publisher={'DC Comics'}/>
    </div>
  )
}
