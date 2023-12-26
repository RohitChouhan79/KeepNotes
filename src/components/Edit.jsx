import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const Edit = (props) => {

    const navigate = useNavigate()
    const {id} = useParams()
    const {notes, setnotes} = props;
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const notesIndex = notes.findIndex((u)=>u.title == id);

    const [newnotes, setnewnotes] =  useState({
        title:notes[notesIndex].title,
        description:notes[notesIndex].description
    })
    const ChangeHandler = (e)=>{
        const copynotes = {...newnotes};
        copynotes[e.target.name] = e.target.value;
        setnewnotes(copynotes);
    }

    const sumbitHandler = (e)=>{
        e.preventDefault();

        const editnotes = {title:newnotes.title, description:newnotes.description}

        if(newnotes.title.trim().length < 4 || newnotes.description.trim().length < 4){
            toast.error('Title and description must have min-mum 4 character');
        } else{
            const nnotes = [...notes];
            nnotes[notesIndex] = editnotes
            setnotes(nnotes);
            localStorage.setItem('notes', JSON.stringify(nnotes))
            toast.success('Thoughts updated successfully');
            navigate('/list')
        }
    }

  return (
    <>
    <div className="login-box">
  <h2>Update Your Notes</h2>
  <form onSubmit={sumbitHandler}>
    <div className="user-box">
      <input name='title' type="text"  required="" onChange={ChangeHandler} value={newnotes.title}/>
      <label>Title</label>
    </div>
    <div className="user-box">
      <input name='description' type="text"  required="" onChange={ChangeHandler} value={newnotes.description}/>
      <label>Description</label>
    </div>
    <button >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Update
    </button>
  </form>
</div>
    </>
  )
}

export default Edit