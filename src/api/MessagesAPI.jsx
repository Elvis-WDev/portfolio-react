

import axios from 'axios';
import { getGlobalVariables } from '../helpers'

const { VITE_API_URL } = getGlobalVariables();

export const MessagesAPI = axios.create({

    baseURL: VITE_API_URL,

})
