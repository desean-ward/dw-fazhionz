import React, { Suspense } from "react";
import { PropagateLoader } from "react-spinners";

const Suspend = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className='fallback'>
          <h3>Loading</h3> <br />
          <PropagateLoader
            className='fallback'
            color='black'
            loading={true}
            size={15}
          />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default Suspend;
