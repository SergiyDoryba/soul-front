import React from 'react'
import fileAsBase64Src from '!base64-image-loader!./../../resources/loader-my.svg'

const styleBlock = {
    width: '100vh',
    height: '80vh',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '10',
    position: 'absolute'
}

const Loader = () => <img src={fileAsBase64Src} style={styleBlock}/>;

export default Loader
