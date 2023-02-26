import React, { useState } from 'react'
export const ModalContext = React.createContext({
    isShownModal: false,
    onHideModal: () => {},
    onShowModal: () => {},
})

const ModalContextProvider = (props) => {
    const [isShown, setIsShown] = useState(false);

    const hideModalHandler = () => {
        setIsShown(false);
    };
    const showModalHandler = () => {
        setIsShown(true);
    };

    const modalObject = {
        isShownModal: isShown,
        onHideModal: hideModalHandler,
        onShowModal: showModalHandler
    }
    return <ModalContext.Provider value={modalObject}>{props.children}</ModalContext.Provider>
}
export default ModalContextProvider;