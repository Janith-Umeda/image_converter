import { useState } from "react"
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default function UploadCard({UploadData}){

    const [Error,setError] = useState();

    const [imageFile,setImageFile] = useState();
    const [type,setType] = useState();
    const [resolution,setRes] = useState();
    const [Quality,setQuality] = useState(50);

    function convertBtn(){
        if(imageFile){
            const blobImage = URL.createObjectURL(imageFile);
            UploadData({
                file:imageFile,
                blob:blobImage,
                type:type,
                resolution:resolution,
                quality:Quality
            })
        }else{
            setError('Please Select a Image File');
        }
    }

    const TYPES = ['jpeg','eps','svg'];
    const SIZES = ['512x512','1024x1024'];

    return(
        <Card className="mt-5 shadow">
            <Card.Body>
                <Row>
                    <Col sm={12} lg className="mb-2">
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Select Your Image.</Form.Label>
                            <Form.Control type="file" onChange={(e)=>setImageFile(e.target.files.item(0))} />
                        </Form.Group>
                        <p className="text-danger">{imageFile? '' : Error}</p>
                    </Col>
                    <Col sm={12} lg className="mb-2">
                        <Form.Group>
                            <Form.Label>Select Type.</Form.Label>
                            <Form.Select onChange={(e)=>setType(e.target.value)}>
                                {TYPES.map((e,i)=>{
                                    return <option key={i} value={e}>{e.toUpperCase()}</option>
                                })}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col sm={12} lg className="mb-2">
                        <Form.Group>
                            <Form.Label>Select Resolution</Form.Label>
                            <Form.Select onChange={(e)=>setRes(e.target.value)}>
                                {SIZES.map((e,i)=>{
                                    return <option key={i} value={e}>{e}</option>
                                })}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col sm={12} lg className="mb-2">
                        <Form.Group>
                            <Form.Label>Quality {Quality}%</Form.Label>
                            <Form.Range 
                                value={Quality}
                                onChange={(e)=>setQuality(e.target.value)}
                                step={10}
                            />
                        </Form.Group>
                    </Col>
                    <Col className="col-12 mg-2 d-block m-auto text-center">
                        <Button variant="success" className="w-100" onClick={()=>convertBtn()}>Convert</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}