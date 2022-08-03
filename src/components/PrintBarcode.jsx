import {React, useState,useEffect } from "react"
import Barcode from 'react-jsbarcode';
import { forwardRef } from "react";

const initialState = {
  data:{
    data : {
      barcodeInputValue:"set",
      selected:{value: {width:1,height:50}, text: '22mm * 10mm'}
     } 
  }
 
}

const  PrintBarcode = forwardRef(
  (props,ref) => {

    const [state,setState] = useState(initialState);

    useEffect(() => {
      setState(props)
      
    }, [props])
    console.log(initialState.data.data.selected.value.width)
    console.log(state.data)
    let valueArray = [
      "DCX-144114114",
      "DCX-514114114",
      "DCX-152314114"];
      
      return (
        <div className="App" ref={ref}>
 
         {/*Multiple barcodes with array map */}
         {
    valueArray.map((data) =>
    
    <Barcode value={data} options={{
      // text:"test",
      width:state.data.data.selected.value.width,height:state.data.data.selected.value.height}}  renderer="img"/> 
    )
         }
         
     
    {/*single barcode with user input */}
    <Barcode value={state.data.data.barcodeInputValue} options={{width:state.data.data.selected.value.width,height:state.data.data.selected.value.height}}  renderer="img"/> 
      
      
        </div>
      );
      
      }
);
    
    export default  PrintBarcode;