import axios from 'axios'
import pluralize from 'pluralize'
import qs from 'qs'
import App from './../app.jsx'

class BaseApi {
    static apiPath() {
        return '/api/v1';
    }

    static modelName() {
        throw Error('You should set name model');
    }

    static modelNamePluralize() {
        return pluralize(this.modelName());
    }

    static resources() {
        return true;
    }

    static prefix() {
        return null;
    }

    static suffix() {
        return null;
    }

    static path(path = null, payload) {
        return [
            [
                this.apiPath(),
                this.prefix(),
                this.resources() ? this.modelNamePluralize() : this.modelName(),
                this.suffix(),
                path
            ].filter(n => n).join('/'),
            qs.stringify(payload, { arrayFormat: 'brackets' })
        ].filter(n => n).join('?');
    }

    static ping(isConnected) {
        if (!isConnected) {
            return Promise.resolve(false);
        }
        return new Promise(resolve => {
            const timeout = setTimeout(() => {
                resolve(false);
            }, 3000);

            axios.head(this.apiPath())
                .then(() => {
                    clearTimeout(timeout);
                    resolve(true);
                })
                .catch(() => {
                    clearTimeout(timeout);
                    resolve(false);
                });
        });
    }

    static getAll(payload) {
        return axios.get(this.path(null, payload));
    }

    static create(model) {
        let data = {};
        data[this.modelName()] = model;
        return axios.post(this.path(), data);
    }

    static getOne(payload) {
        this.requireModelId(payload);
        return axios.get(this.path(this.resources() ? payload.id : null, payload));
    }

    static update(model) {
        this.requireModelId(model);
        let data = {};
        data[this.modelName()] = model;
        return axios.put(this.path(this.resources() ? model.id : null), data);
    }

    static destroy(model, payload) {
        this.requireModelId(model);
        return axios.delete(this.path(this.resources() ? model.id : null, payload));
    }

    static requireModelId(model) {
        if (this.resources() && model.id == null) {
            throw Error('Model.id can\'t be blank');
        }
    }

    static catchError(promise, catchFunction, ...args) {
        args.filter(arg => arg).forEach(arg => promise = promise.then(arg));
        return promise.catch((error) => {
            let result = null;
            if (catchFunction) {
                result = catchFunction(error);
                if (result) {
                    return result;
                }
            }
            if (App.apiProcessErrorDefault(error)) {
                // return;
            }
            throw error;
        });
    }
}

export default BaseApi;
