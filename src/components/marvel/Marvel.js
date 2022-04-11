import { HeroList } from "../hero/HeroList"

export const Marvel = (publisher) => {

  console.log(publisher)

  return (
    <div>
        <h1>Marvel</h1>
        <hr />
        <HeroList publisher={'Marvel Comics'}/>
    </div>
  )
}
