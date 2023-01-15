import React,{useContext,useState} from 'react'
import BookContext from '../Hook/BookContext'
import {useNavigate} from 'react-router-dom'
import Header from '../Components/Header'
import {Button, Form} from 'react-bootstrap'
import {v4 as uuid}  from "uuid"
 function NewNote() {
 const {addRequest} = useContext(BookContext)
 const navigate = useNavigate()
  const [formData, setFormData] = useState({
            id:0,
            note:"",
            title:""
           })
           const { note, title} = formData
           const onChange = (e) => {
             setFormData((prevState) => ({
               ...prevState,
               [e.target.id] : e.target.value,
             }))
           }
           
           const onSubmit = (e) => {
             e.preventDefault();
             formData.id =  uuid;
             addRequest(formData)
             navigate('/')
           }
  return (
    <>
    <Header />
      <div className='form'>
      <h2>Add Note</h2>
      <Form>
      <Form.Group  className="mb-3">
            <Form.Label>Heading</Form.Label>
            <Form.Control type="text" id="title" value={title} placeholder="Enter heading" 
              onChange={onChange}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Note</Form.Label>
            <Form.Control as="textarea" id="note" rows={5} value={note}
             onChange={onChange}/>
        </Form.Group>
      <Button  onClick={onSubmit} className="ml-10">Submit</Button>
</Form>
     </div>
     </>
  )
}
export default NewNote