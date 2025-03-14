import React, { Suspense } from 'react';
import Loading from '../../common/loading';

const DetailComponent = React.lazy(() => import('./Detail'));

const LoadableDetail = () => {
    return (
        <Suspense fallback={<Loading />}>
            <DetailComponent />
        </Suspense>
    );
};

export default LoadableDetail;


