import React from 'react'

const FullName = () => {
    let firstName="Ahmed";
    let lastName = "Fathallah";
    return (
        <div>
           <p className='myfullname'> {firstName+" "+lastName} </p>
        </div>
    )
}

export default FullName
