import React, { Suspense } from 'react';

const DetailComponent = React.lazy(() => import('./Detail'));

const DetailLoadable = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DetailComponent />
        </Suspense>
    );
};

export default DetailLoadable;


