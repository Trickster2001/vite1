import { data } from 'autoprefixer';
// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/Trickster2001")
  //   .then((res)=>res.json())
  //   .then((data)=>{console.log(data);setData(data)})
  // },[])
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}</div>
    <img className='' src={data.avatar_url} alt="Git Profile Photo" width={300}/>
    </>
  )
}

export default Github

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/Trickster2001")
  return response.json();
}