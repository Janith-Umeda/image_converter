import { useEffect, useState } from "react";
import UploadCard from "./components/uploadCard";
import SelectionCard from "./components/selectionCard";

export default function App(){
  const [uploadData,setUploadData] = useState();

  return(
    <>
      <UploadCard UploadData={setUploadData}/>
      <SelectionCard fileType={uploadData?.file.type.split('/')[1]}/>
      <div style={{textAlign:"center"}}>
        <h4>Input</h4>
        { uploadData?.blob? <img src={uploadData.blob} alt="" width="20%" /> : null }
      </div>
    </>
  )
}