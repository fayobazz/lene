import React, { Suspense } from 'react';
// import Spline from '@splinetool/react-spline/next';
// import React from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));
export default function Susp() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Spline
        scene="https://prod.spline.design/XfEcSXdFuJXLto7A/scene.splinecode"
      />
        {/* <PostFeed /> */}
      </Suspense>
      {/* <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense> */}
    </section>
  );
}

{ /* <Spline
        scene="https://prod.spline.design/5NxRWUHy8hkuGcjo/scene.splinecode"

        // scene="https://prod.spline.design/9DOUnwalUONdd3OP/scene.splinecode"
      /> */ }
