import React, {useCallback} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useForm} from 'react--hook-form '
import appwriteService from "../../appwrite/conf"
import {Button, Input, RTE, Select} from ".."

export default function  PostForm({post}) {
  const {
    register,
     handleSubmit,  //handles form submission 
      watch ,
       setValue, 
       control, 
       getValues
}= useForm ({
      defaultValues:{
        title:post?.title|| "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status|| "active",
      },
  });

  const navigate = useNavigate();
  const userData = useSelector((state)=>state.auth.userData);


  const submit = async(data)=>
  {
    if(post ){
        //Edit mode
        const file = data.image[0]? await appwriteService.uploadFile(data.image[0]):null;
        if(file){
            //delete old image
            appwriteService.deleteFile(post.featuredImage);
        }
        //update post in database
        const dbPost = await appwriteService.updatePost(post.$id, {
            ...data,
            featuredImage:file? file.$id : undefined,
        });


        //Redirect to updated post
        if(dbPost){
            navigate(`/post/${dbPost.$id}`);
        }
    }
    else{
        //create mode

        const file = await appwriteService.uploadFile(data.image[0]);
        if(file){
            const fileId = file.$id;
             data.featuredImage= fileId;
             const dbPost = await appwriteService.createPost({...data, userId: userData.$id});

             if(dbPost){
                navigate(`/post/${dbPost.$id}`);
             }
        }
    }
  };

  const slugTransform = useCallback((value)=>{
    if(value && typeof value === "string")
        return value
               .trim()
               .toLowerCase()
               .replace(/[^a-zA-Z\d\s]+/g, "-")
               .replace(/\s/g, "-");

        return "";
               
  },[]);

  React.useEffect(()=>{

    const subscription = watch((value, {name})=>{
        if(name === "titile")
        {
            setValue("slug", slugTransform(value.title), {shouldValidate:true});
        }
    });

    return ()=> subscription.unsubscribe();


  }, [watchh, slugTransform, setValue]);

  return (
    <form onSUbmit ={handleSubmit(submit)}
    className='flex  flex-wrap'>
        <div className='w-2/3 px-2'>
        <Input 
        label ="Title: "
        placeholder = "Title"
        className = "mb-4"
        {...register("title", {required: true })}/>

        <Input 
        label ="Title: "
        placeholder = "Title"
        className = "mb-4"
        {...register("title", {required: true })}
        onInput={(e)=>{
            setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate:true
            });
        }}
        />
        <RTE 
        lable = "Content :" 
        name= "content"
        control ={control}
        defaultValue = {getValues("content")}
        />
        </div>

        <div className='w-1/3 px-2'>
           <Input 
           label = "Featured Image"
           type = "file"
           className= "mb-4"
           accept ="image/png, image/jpg, image/jpeg, image/gif"
           {...register ("image", {required: !post})}
           />
        {post && (
            <div className='w-full mb-4'>
                 <img src={appwriteService.getFilePreview(post.featuredImage)}
                 alt= {post.title}
                 className='rounded-lg'/>
            </div>
        )}
        <Select 
        options = {["active", "inactive"]}
        label ="Status"
        className = "mb-4"
        {...register("status", {required:true})}/>

        <Button type = "submit" bgColor = {post?"bg-green-500": undefined}
        className ="w-full">
            {post? "Update":"Submit"}

        </Button>

        </div>
    </form>
  );
}
