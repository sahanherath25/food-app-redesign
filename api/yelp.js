import axios from "axios";

export default axios.create({
    //TODO Add base URL in API Documentation
    baseURL:"https://api.yelp.com/v3/businesses",
    //TODO Step 2 Add header object
    headers:{
        // Authorization : Bearer API_KEY
        Authorization:"Bearer v1ZFfn6JoZ2oESMMGpGbDI3ZssJr-YnDL8xt8Q_wDEd4B_xbrNNeCWhwULri7oYHetIyLgkF41gtx_xheKPh_Vk5dYK2RqPhU9VQ7NWhXayps5Xfmtu5RqDpMCgxZnYx"
    }
});

