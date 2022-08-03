import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import  PrintBarcode  from './PrintBarcode';

const PrintGenerator = (props) => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print Barcodes</button>}
        content={() => componentRef.current}
      />
      <PrintBarcode data={props} ref={componentRef} />
    </div>
  );
};

export default PrintGenerator;