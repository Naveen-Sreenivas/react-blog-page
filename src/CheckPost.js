import React from 'react'
import { useParams } from 'react-router-dom'
const CheckPost = () => {
const {id} = useParams()

  return (
    <div>
      <p>check router {id}</p>
    </div>
  )
}

export default CheckPost
