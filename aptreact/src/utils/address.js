import axios from "axios";

const addy = axios.create({
    baseURL: "https://github.com/rsuite/rsuite/blob/master/docs/public/data/users-role.json/",
});
export default addy;