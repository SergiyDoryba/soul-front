import axios from 'axios'
import BaseApi from './baseApi.jsx'


class PsalmApi extends BaseApi {
    static apiPath() {
        return '/bins';
    }

    static resources() {
        return false;
    }

    static modelName() {
        return 'hvo82';
    }

    static path() {
        return 'https://forsoul.herokuapp.com/api/needs/psalms';
    }
}

export default PsalmApi;