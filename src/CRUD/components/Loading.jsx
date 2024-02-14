import React from 'react';
import { cloneElement } from 'react';


const Loading = ({loading, error, children}) => {
    
    const elementType = children?.type?.render?.displayName;
     

    const renderHandler = () => {
        if(elementType === 'Button'){
            const cloneButton = React.cloneElement(children, {disabled: true}, "Loading" );
            
            return (
                <>

                    {loading ? (
                        cloneButton

                    ) : error ? (
                        <>
                        {children}
                        <p>{error}</p>
                        </>

                    ): children}
                </>
            )
        }
        return (
            <>

                {loading ? (
                    <p>loading...</p>

                ) : error ? (
                    <p>{error}</p>

                ): children}
            </>
        )
    }
  return renderHandler();
}

export default Loading;
