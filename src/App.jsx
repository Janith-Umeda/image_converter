import { useState } from "react";
import UploadCard from "./components/uploadCard";
import NavBar from "./components/navBar";

export default function App(){
  const [uploadData,setUploadData] = useState();

  return(
    <>
      <NavBar/>
      <div className="container">
        <UploadCard UploadData={setUploadData}/>
        <div style={{textAlign:"center"}} className="shadow">
          <h4>Input</h4>
          { uploadData?.blob? <img src={uploadData.blob} alt="" width="20%" /> : null }
        </div>
      </div>
    </>
  )
}