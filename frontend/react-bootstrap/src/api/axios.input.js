import axios from 'axios';
import { dbUrl } from '.';

const Instance = axios.create({
    baseURL: dbUrl,
});
export default Instance;