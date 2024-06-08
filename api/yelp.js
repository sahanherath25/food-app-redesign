import axios from "axios";
import { YELP_API_KEY } from '@env';

export default axios.create({
    //TODO Add base URL in API Documentation
    baseURL:"https://api.yelp.com/v3/businesses",
    //TODO Step 2 Add header object
    headers:{
        // Authorization : Bearer API_KEY
        Authorization:`Bearer ${YELP_API_KEY}`
    }
});

