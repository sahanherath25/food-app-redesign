import {useEffect,useState} from "react";
import yelp from "../api/yelp";

//Adding code for making a API request

export default ()=>{
    //Todo Created state to store results from API call
    const [results, setResults] = useState([]);
    const [error,setError]=useState("");

    const searchAPI =  async (searchTerm) => {
        try{
            const response=await yelp.get("/search",{
                params:{
                    limit:50,
                    term:searchTerm,
                    location:"san jose"
                }
            })

            setResults(response.data.businesses)
            console.log("DATA ",response.data)

        }catch (e) {
            setError("Something Went Wrong")
            console.dir(e)
        }

    }

    useEffect(()=>{

        searchAPI("pasta")
        console.log("Get called")
    },[])

    return [searchAPI,results,error]
}
