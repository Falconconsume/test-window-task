import axios, {AxiosResponse} from 'axios';

const API_COUNTRIES: string = "https://65cb708defec34d9ed878725.mockapi.io/comments";

const companiesService = {
    fetchCompanies: () => axios.get(API_COUNTRIES).then((response: AxiosResponse<any>) => response.data),
}

export default companiesService;