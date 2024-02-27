import React from 'react'
import HeadingCaption from '../HeadingCaption/HeadingCaption'
import "./CryptoCard.css"


const CryptoCard = ({coin,setSelectedCoin,handleClose,img, coinName,coinValue, price ,qamount}) => {
  return (
    <div className='mb-4 CryptoCard'>
    <div className='d-flex align-items-center '>
   <img src={img} width="30px" className="me-3 " alt="coin"/>
       <HeadingCaption
           heading={coinName}
           caption={coinValue}
           textColor="#999999"
           fontSize="10px"
           fontHSize="12px"
       />
   </div>
   
   <HeadingCaption
   headerParentClass="innerCard"
   heading={price}
   caption={qamount}
   textColor="#999999"
   fontSize="10px"
   fontHSize="12px"

/>
  
 

 
</div>
  )
}

export default CryptoCard