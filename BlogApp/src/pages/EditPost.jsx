import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import { useParams, useNavigate } from 'react-router-dom'
import appwriteService from '../appwrite/conf'

function EditPost() {
    const [post, setPost ] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
             if(slug){
                  appwriteService.getPost(slug).then((post)=>{
                    if(post){
                        setPost(post)
                    }
                  })
             }else{
                navigate('/')
             }
    },[slug, navigate])
  return  post?(
    <div className='py-8'>
        <container >
            <PostForm post={post}/>
        </container>
    </div>
  ):null
}

export default EditPost