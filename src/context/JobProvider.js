import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';

const JobProvider = ({ children }) => {
    const [store, setStore] = React.useState(null);

    useEffect(() => {
        const initStore = async () => {
            const configuredStore = await configureStore();
            setStore(configuredStore);
        };

        initStore();
    }, []);

    if (!store) {
        // İlk render sırasında store henüz oluşturulmadıysa loading veya başka bir şey göster
        return null;
    }

    return <Provider store={store}>{children}</Provider>;
};

export default JobProvider;
