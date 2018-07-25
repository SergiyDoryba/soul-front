import axios from 'axios'
import BaseApi from './baseApi.jsx'


class PsalmApi extends BaseApi {
    static apiPath() {
        return '/api/needs';
    }

    static resources() {
        return false;
    }

    static modelName() {
        return 'psalm';
    }

    static path() {
        return API_PSALMS;
    }
}

export default PsalmApi;