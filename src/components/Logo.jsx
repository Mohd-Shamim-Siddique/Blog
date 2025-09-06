import React from 'react'

const Logo = ({ width = '100px' }) => {
    return (
        <div className='w-[70px]'>
            <img className={`${width}`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Tif267VMPYZgZk2giZ0noHzFrVbzFRIvNw&s" alt="" />
        </div>
    )
}

export default Logo