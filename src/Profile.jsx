import { useContext } from "react"
import { UserContext } from "./Context/UserContest"

function Profile(){

    const {name,age} = useContext(UserContext);

    return(

        <>

        <h1> this is Profile Component</h1>
        
        <h1>User Name is : {name}</h1>
        <h2>{name} is {age} years old </h2>

        </>

    )

}

export default Profile