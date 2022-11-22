import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import './Feeds.css'
import InputOptions from './InputOptions';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FeedIcon from '@mui/icons-material/Feed';
import Post from './Post'
import { db } from './firebase';
import {collection, getDocs, addDoc} from "firebase/firestore"
import { async } from '@firebase/util';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';



 function Feeds() {

    const [posts, setPosts] = useState([])
    const postCollection = collection(db, "posts")
    const [input, setInput] = useState("")

    const user = useSelector(selectUser)

    useEffect(()=>{
        const getPosts = async () =>{
            const data = await getDocs(postCollection);
            console.log("daata",data.docs)
            setPosts(data.docs.map(doc =>(
                {
                    ...doc.data(),
                    id : doc.id
                }
            )))
        }
       getPosts();
    
    },[])


        const addPost = (e) =>{
            e.preventDefault();

             addDoc(postCollection, {
                name : user.displayName,
                description : user.email,
                messages : input

            })

            setInput("")
            
            
        
        }
    

    return (
        <div className='feeds'>
            <div className='feed-input-container'>
                <div className='feed-input'>
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e=>setInput(e.target.value)} type='text' />
                        <button onClick={addPost} type='submit'>Submit</button>
                    </form>
                </div>
                <div className='inputOption '>
                    <InputOptions Icon={PhotoSizeSelectActualIcon} title="Photo" color="#70B5F9"/>
                    <InputOptions Icon={SmartDisplayIcon} title="Video" color="#E7A33E"/>
                    <InputOptions Icon={CalendarMonthIcon} title="Event" color="#C0CBCD"/>
                    <InputOptions Icon={FeedIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>

            {
                posts.map(({id , name, description, messages})=>(
                    <Post 
                    key={id}
                    name={user.displayName}
                    description={user.email}
                    messages={messages}/>
                ))
            }

                {/* <Post
                name="Tushar Bhujade"
                description="This is test"
                messages="Hii There!!"
                /> */}
          
            {/* Posts */}
        </div>
    )
}

export default Feeds