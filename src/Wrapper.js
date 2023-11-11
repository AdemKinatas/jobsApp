import React from 'react';
import Router from './Router';
import JobProvider from './context/JobProvider';

const Wrapper = () => {
    return(
        <JobProvider>
            <Router />
        </JobProvider>
    );
}

export default Wrapper;