import React from 'react'
import pathToRegexp from 'path-to-regexp'
import qs from 'qs'

let config = {
    url: ''
};

export const setBaseUrl = (url) => config.url = url;

const regexp = {
    root: '/',
    psalms: '/psalms',
    posts: '/posts',
    post: '/posts/:id',
    about: '/about',
    psalm: '/psalms/:id'

};

let paths = {setBaseUrl};

Object.keys(regexp).forEach((key) => {
    paths[`${key}RegexpWTS`] = regexp[key].replace(/^\//, '');
    paths[`${key}Regexp`] = regexp[key];
    const tokens = pathToRegexp.parse(regexp[key]);
    const tokenNames = tokens.map((token) => typeof token === 'string' ? null : token.name).filter((token) => token);
    const pathFunc = pathToRegexp.tokensToFunction(tokens);
    paths[`${key}Path`] = (data, options) => {
        let queryValues = {};
        Object.keys(data || {}).forEach((key) => {
            tokenNames.findIndex((tokenName) => tokenName === key) === -1 && key !== 'hash' && (queryValues[key] = data[key]);
        });
        const path = pathFunc(data, options);
        const query = qs.stringify(queryValues);
        const hash = (data || {}).hash || '';
        return `${path}${query && '?'}${query}${hash && '#'}${hash}`;
    };
    paths[`${key}Url`] = (...args) => `${config.url}${paths[`${key}Path`](...args)}`;
});

export default paths;
