import React, { Suspense } from "react";
import { PropagateLoader } from "react-spinners";

const Suspend = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className='text-white bg-black fallback'>
          <h3>Loading</h3> <br />
          <PropagateLoader
            className='fallback'
            color='white'
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
