/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
export const ComponentToPrint = React.forwardRef((props, ref) => {

  return (
    <div className='d-none'>
      <div ref={ref} dir='rtl'>
        <div className='bg-white mx-auto p-3'>
          {props.t}
        </div>
      </div>
    </div>
  );
});