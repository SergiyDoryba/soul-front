import BaseApi from './baseApi.jsx'
import axios from 'axios'


class PsalmApi extends BaseApi {
    static apiPath() {
        return '/bins';
    }

    static resources() {
        return false;
    }

    static modelName() {
        return 'hvo82';
        // return 'collection';
    }

    static path() {
        return 'http://api.myjson.com/bins/hvo82';
    }
}

export default PsalmApi;