import React from 'react'
import Loader from './loader.jsx'

const Loading = (props) => {
    if (props.isLoading) {
        if (props.timedOut) {
            return <div>Loader timed out!</div>;
        } else if (props.pastDelay) {
            return <div className="text-center"><Loader/></div>;
        } else {
            // Don't flash "Loading..." when we don't need to.
            return null;
        }
    } else if (props.error) {
        return <div>Error! Component failed to load</div>;
    } else {
        return null;
    }
};

export default Loading;
