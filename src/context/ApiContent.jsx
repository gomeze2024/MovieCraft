import { createContext, useContext, useState } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [key, setKey] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    return (
        <ApiContext.Provider value={{ key, setKey, showPopup, setShowPopup}}>
            {children}
        </ApiContext.Provider>
    );
};
