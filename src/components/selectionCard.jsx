export default function SelectionCard({fileType}){

    const TYPES = ['jpeg','eps','svg'];

    return(
        <div style={{display:"flex"}}>
            <h5>{fileType} to {'>'} </h5>
            <select>
                {TYPES.map((e,i)=>{return <option key={i} value={e}>{e.toUpperCase()}</option>})}
            </select>
        </div>
    )
}