import axios from 'axios'
import React,{useEffect, useState} from 'react'
const BookContext = React.createContext()
export const BookProvider = ({children})=> {
      const [isloading, setIsLoading] = useState(true)
      const [notes, setNotes] = useState([]);
     const [id,setId] = useState(0)
useEffect(() => {
      fetchData();
},[])
// get request 
     const fetchData = () => {
      axios
      .get('http://localhost:3000/notes')
      .then((response) => {
            setNotes(response.data)
            setIsLoading(false) 
      }) 
     }
// Add request 
const addRequest = (newNote) => {
      axios
      .post('http://localhost:3000/notes', newNote)
      .then((response) => {
            setNotes([response.data, newNote])
      })
}

// delete request 
const delRequest = (id) => {
      if(window.confirm('Are you sure you want to delete?')){
            axios
            .delete(`http://localhost:3000/notes/${id}`)
      }
      setNotes(notes.filter((notes) => notes.id !== id))
}      


     return (
      <BookContext.Provider value={{notes, isloading,
      addRequest, delRequest,setId,id, setNotes}}>
            {children}
      </BookContext.Provider>
)      
}

export default BookContext