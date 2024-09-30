import axios from 'axios';

const instance=axios.create({
    baseURL:" http://localhost:7000",
    timeout:"2000"
})

export default instance;