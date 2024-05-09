"use client"
// MassProductAdd.js
import React, { useEffect, useState } from "react";
import CSVConverter from "./CSVConverter";
import { addMultipleProducts } from "@/utils/functions/addMultipleProducts";
import toast, { Toaster } from "react-hot-toast";

const MassProductAdd = () => {
  const [csvData, setCsvData] = useState<any>(null);
  const [showTable, setShowTable] = useState(false);
   useEffect(() => {
    console.log(csvData)
    if (csvData && csvData.data.length > 1) { // Ensure results is an array and contains more than one row
      const headers = csvData.data[0]; // First row is assumed to be headers
      const objects = csvData.data.slice(1).map((row: any) => {
        const obj: any = {};
        row.forEach((value: any, index: number) => {
          obj[headers[index]] = value; // Assign each value to its corresponding header
        });
        return obj;
      });
      console.log("Parsed objects:", objects); // Log parsed objects for debugging
      setCsvData(objects); // Update with parsed data
    }
   }, [csvData!=null]);
   const handleSubmit = async ()=>{
    try{
      
      const data = await addMultipleProducts(csvData);
      toast.success("Multiple Products Added !")
    }
    catch(err){
      toast.error("Something error occured !")
      console.log(err)
    }
   }
  return (
    <div className="relative p-5 w-4/5 flex flex-col gap-2 items-start bg-white border-2 border-red-600 my-5 rounded-xl mx-auto">
      <h1 className="font-semibold text-2xl">Add Products</h1> 
      <CSVConverter csvData={csvData} setCsvData={setCsvData} handleSubmit={handleSubmit} />
      <Toaster position="bottom-right" />
      <button onClick={()=>setShowTable(true)} className="bg-red-600 text-white px-5 py-2 rounded-xl font-semibold border-2 border-red-600 hover:bg-white hover:text-red-600 hover:border-2">
            Show
          </button>
      <table className="table overflow-x-scroll table-auto w-full border border-gray-300 text-black rounded-xl">
      { showTable &&
        csvData && csvData.length > 0 && (
          <>
            <thead className="bg-gray-350 font-semibold">
              <tr>
                {Object.keys(csvData[0] || {}).map((header: string, index: number) => (
                  <th key={index} className="px-4 py-2">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.map((item: any, index: number) => (
                <tr key={index} className="bg-white border">
                  {Object.keys(csvData[0] || {}).map((header: string, subIndex: number) => (
                    <td key={subIndex} className="px-4 py-2">
                      {item[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </>
        )
        
      }
        </table>
    
    </div>
  );
};

export default MassProductAdd;
