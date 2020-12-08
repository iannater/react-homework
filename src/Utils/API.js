// Got this from activity 19

import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=10&nat=us";

// Export an object with a "search" method that searches the Giphy API for the passed query
const API = {
    EmployeeSearch: function () {
        return axios.get(BASEURL);
    }
};

export default API;