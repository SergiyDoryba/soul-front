import axios from 'axios'
import BaseApi from './baseApi.jsx'


class PostApi extends BaseApi {
    static apiPath() {
        return '/posts';
    }

    static resources() {
        return false;
    }

    static modelName() {
        return '';
    }

    static path() {
        return 'https://jsonplaceholder.typicode.com/posts';
    }
}

export default PostApi;