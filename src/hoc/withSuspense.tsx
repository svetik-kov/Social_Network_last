import React, {ComponentType, Suspense} from 'react';
import {Preloader} from 'components/common/Preloader';


export function withSuspense<T>(Component: ComponentType<T>) {


    return (props: any) => {
        // console.log(props)
        return (
            <Suspense fallback={<Preloader/>}>
                <Component {...props}/>
            </Suspense>
        )
    }
}



