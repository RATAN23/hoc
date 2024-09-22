import React from 'react'
import withFetch from './with-fetch';
// import { useFetch } from '../hooks/use-fetch'

const PostsList = ({data,loading ,error}) => {
  

  if(loading){
    return <>Loading....</>;
  }

  if(error) {
    return <>{error}</>
  }
  return (
    <div style = {{display : 'flex' , flexDirection : "column" , justifyContent : 'center' , alignItems : 'center' }}>
      {
      data?.slice(1,10).map((item) => (
        <ul>
            <li style = {{fontSize : "3rem"}}key = {item.id}>{item.title}</li>
        </ul>
      ))
      }
    </div>
  )
}

export default withFetch("https://jsonplaceholder.typicode.com/posts") (PostsList)
