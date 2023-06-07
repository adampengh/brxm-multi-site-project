import React, { useEffect } from 'react';
import { BrComponentContext, BrPageContext } from '@bloomreach/react-sdk';

const GlobalElementsContext = React.createContext({});

function GlobalElementsProvider( props: any ) {
    const page = React.useContext(BrPageContext);
    const component = React.useContext(BrComponentContext);
    const [ globalElements, setGlobalElements ] = React.useState(null);

    useEffect(() => {
        const globalElementsComponent = component?.getComponent('globalElements');
        const { document: documentRef } = globalElementsComponent?.getModels()!;
        const document = documentRef && page?.getContent(documentRef)!;

        const {
            globalElementsHeader,
            globalElementsFooter,
        } = document.getData();

        const data: any = {
            globalElementsHeader,
            globalElementsFooter,
        };

        setGlobalElements( data );
    }, [setGlobalElements, component, page]);

    return (
        <GlobalElementsContext.Provider value={{ globalElements, setGlobalElements }}>
            { props.children }
        </GlobalElementsContext.Provider>
    )
}

export { GlobalElementsContext, GlobalElementsProvider };
