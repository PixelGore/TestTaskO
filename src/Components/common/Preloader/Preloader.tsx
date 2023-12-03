//Imports
import React from 'react';
import preLoader from '../../../assets/common/preLoader.svg'

//Preloader Component
let PreLoader: React.FC = () => {
    return (<div className="fixed -translate-x-2/4 translate-y-2/4 z-[99] left-2/4"><img src={preLoader} alt='preloader' /></div>)
}

//Export
export default PreLoader;