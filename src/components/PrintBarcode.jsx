import {React, useState } from "react"
import Barcode from 'react-jsbarcode';
import { forwardRef } from "react";

const  PrintBarcode = forwardRef(
  (props,ref) => {

    const [barcodeInputValue, updateBarcodeInputValue] = useState('product name')
    let valueArray = [
      "DCX-144114114",
      "DCX-514114114",
      "DCX-152314114"];
       let   onChangeBarcode = (event) => (
        event.target.value !== "" ?
       updateBarcodeInputValue(event.target.value)
       :
       updateBarcodeInputValue('null input')
       );
     
      
       const options = [
        {value: '', text: '--Choose an option--'},
        {value: {width:1,height:50}, text: '22mm * 10mm'},
        {value:  {width:1,height:60}, text: '15mm * 10mm'},
        {value:  {width:2,height:50}, text: '32mm * 10mm'},
      ];
      
    
      const [selected, setSelected] = useState(options[0]);
    
    
      let handleChange = (event) =>(
        // console.log(event.target.value.width)
        setSelected(options[event.target.value])
        
      );
    
      
      return (
        <div className="App" ref={ref}>
          <h1>Label Printing</h1>
         <form>
         
          <select value={selected} onChange={handleChange}>
            {options.map((option,index) => (
              <option key={index} value={index}>
                {option.text}
              </option>
            ))}
          </select>
          
          <input
                          autoFocus={true}
                          placeholder='Start Scanning'
                          value={barcodeInputValue}
                          onChange={onChangeBarcode}
                          id='SearchbyScanning'
                          className='SearchInput'
                         
                          required="true"
                        /> 
         </form>
         {/*Multiple barcodes with array map */}
         {
    valueArray.map((data) =>
    
    <Barcode value={data} options={{
      // text:"test",
      width:selected.value.width,height:selected.value.height}}  renderer="img"/> 
    )
         }
         
     
    {/*single barcode with user input */}
    <Barcode value={barcodeInputValue} options={{width:selected.value.width,height:selected.value.height}}  renderer="img"/> 
      
        </div>
      );
      
      }
);
    
    export default  PrintBarcode;