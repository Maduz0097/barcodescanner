import {React, useState } from "react"
import Barcode from 'react-jsbarcode';
import PrintBarcode from "./PrintBarcode";
import PrintGenerator from "./PrintGenerator";

const BarcodeDataInput = () =>{
    const options = [
        {value: '', text: '--Choose an option--'},
        {value: {width:1,height:50}, text: '22mm * 10mm'},
        {value:  {width:1,height:60}, text: '15mm * 10mm'},
        {value:  {width:2,height:50}, text: '32mm * 10mm'},
      ];
    const [barcodeInputValue, updateBarcodeInputValue] = useState('product name')
    const [selected, setSelected] = useState(options[0]);
    const barProps = {
        barcodeInputValue:barcodeInputValue,
        selected:selected
    }
       let onChangeBarcode = (event) => (
        event.target.value !== "" ?
       updateBarcodeInputValue(event.target.value)
       :
       updateBarcodeInputValue('null input')
       );
     
      
      
      
    
      
    
    
      let handleChange = (event) =>(
        // console.log(event.target.value.width)
        setSelected(options[event.target.value])
        
      );
      return(
        <div>
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
       <PrintGenerator data={barProps} />
      
  </div>
      );
     
}

export default BarcodeDataInput;