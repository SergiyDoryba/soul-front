import React from 'react'

const App = {
    store: null,
    history: null,

    apiProcessErrorDefault: (error) => {
        if (error.response.status == 401) {
            console.log('error', error.response.data.error)
            return true;
        }
        if (error.response.status > 400) {
            console.log('error', error.response.data.error)
            return true;
        }
        return false;
    }
};
export default App