import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const Edit = (props) => {

    const navigate = useNavigate()
    const {id} = useParams()
    const {thoughts, setthoughts} = props;
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const ThoughtIndex = thoughts.findIndex((u)=>u.title == id);

    const [newthought, setnewthought] =  useState({
        title:thoughts[ThoughtIndex].title,
        description:thoughts[ThoughtIndex].description
    })
    const ChangeHandler = (e)=>{
        const copyThought = {...newthought};
        copyThought[e.target.name] = e.target.value;
        setnewthought(copyThought);
    }

    const sumbitHandler = (e)=>{
        e.preventDefault();

        const editThought = {title:newthought.title, description:newthought.description}

        if(newthought.title.trim().length < 4 || newthought.description.trim().length < 4){
            toast.error('Title and description must have min-mum 4 character');
        } else{
            const nthought = [...thoughts];
            nthought[ThoughtIndex] = editThought
            setthoughts(nthought);
            localStorage.setItem('thoughts', JSON.stringify(nthought))
            toast.success('Thoughts updated successfully');
            navigate('/list')
        }
    }

  return (
    <>
    <div className="login-box">
  <h2>Update Your Thought</h2>
  <form onSubmit={sumbitHandler}>
    <div className="user-box">
      <input name='title' type="text"  required="" onChange={ChangeHandler} value={newthought.title}/>
      <label>Title</label>
    </div>
    <div className="user-box">
      <input name='description' type="text"  required="" onChange={ChangeHandler} value={newthought.description}/>
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