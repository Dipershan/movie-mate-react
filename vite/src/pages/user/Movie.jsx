import { useParams } from "react-router-dom"

const Movie = () => {
    const {id} =  useParams();
  return (

    

    <div>MOvie name is {id}</div>
  )
}

export default Movie