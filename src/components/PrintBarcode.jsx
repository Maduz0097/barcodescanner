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
      {text:"prod_name",value:"DCX-144114114"},
      {text:"prod_name",value:"DCX-144114115"},
      {text:"prod_name",value:"DCX-144114116"},
      {text:"prod_name",value:"DCX-144114117"}];
      
      return (
        <div className="App" ref={ref}>
 
         {/*Multiple barcodes with array map */}
         {
    valueArray.map((data) =>
    
    <Barcode value={data.value} options={{
      text:data.text + ' - ' + data.value,
      format:"CODE39",
      textAlign:"center",
      fontSize:15,
      width:state.data.data.selected.value.width,height:state.data.data.selected.value.height}}  renderer="img"/> 
    )
         }
         
     
    {/*single barcode with user input */}
    {/* <Barcode value={state.data.data.barcodeInputValue} options={{width:state.data.data.selected.value.width,height:state.data.data.selected.value.height,format:"EAN13"}}  renderer="img"/>  */}
      
      
        </div>
      );
      
      }
);
    
    export default  PrintBarcode;