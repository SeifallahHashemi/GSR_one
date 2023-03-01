import React from 'react'
import { HashLoader } from 'react-spinners'

function Loading() {
  return (
    <div>
        <HashLoader size={300} color="#36d7b7" cssOverride={{
    left: "50%",
    position: 'absolute',
    top: "50%",
    translate: "-50% -50%",
  }}/>
    </div>
  )
}

export default Loading