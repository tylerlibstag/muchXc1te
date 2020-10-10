const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyDZQyd2wzg_0BH3t8FSsCWOvHnsnssTdHc";

export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    },
};
