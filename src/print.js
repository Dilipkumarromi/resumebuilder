import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Resume001 from './template/resume_001/resume001';

const  Print=()=> {
    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
        <Resume001 ref={componentRef}/>
        <button onClick={handlePrint}>Print this out!</button>
    </div>
  )
}

export default Print