import { useState } from "react"

export default function UploadCard({UploadData}){

    const [blob,setBlob] = useState();
    const [Error,setError] = useState();

    function getFile(e){
        if(e.length > 0){
            const blobImage = URL.createObjectURL(e.item(0));
            UploadData({file:e.item(0),blob:blobImage});
            setBlob(blobImage);
            // URL.revokeObjectURL(blobImage);
        }else{
            setError('Please Select a Image File');
        }
    }

    return(
        <div className="UploadSection">
            <input 
                type="file" 
                onChange={(e)=>getFile(e.target.files)}
            />
            <p>{Error}</p>
            {/* <img src={blob? blob : '/logo512.png'} width="10%" alt="d" /> */}
        </div>
    )
}