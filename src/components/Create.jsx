import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Create = (props) => {

    const navigate = useNavigate()
    const {thoughts, setthoughts} = props;
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');

    const sumbitHandler = (e)=>{
        e.preventDefault();
        if(title.trim().length < 4 || description.trim().length < 4){
            toast.error('Title and description must have min-mum 4 character');
        } else{
            const newthought = {title, description};
            const tho = [...thoughts, newthought]
            setthoughts(tho);
            localStorage.setItem('thoughts', JSON.stringify(tho))
            toast.success('Thoughts saved successfully');
            setdescription('');
            settitle('');
            navigate('/list')
        }
    }

  return (
    <>
    <div className="login-box">
  <h2>Write Your Thought</h2>
  <form onSubmit={sumbitHandler}>
    <div className="user-box">
      <input type="text"  required="" onChange={(e)=>{settitle(e.target.value)} } value={title}/>
      <label>Title</label>
    </div>
    <div className="user-box">
      <input type="text"  required="" onChange={(e)=>{setdescription(e.target.value)}} value={description}/>
      <label>Description</label>
    </div>
    <button >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Save
    </button>
  </form>
</div>
    </>
  )
}

export default Create