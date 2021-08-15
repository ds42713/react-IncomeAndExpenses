import './FromComponent.css'
import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
const FromComponent = (props)=>{

    const[title,setTitle] = useState('')
    const[amount,setAmout] = useState(0)
    const[fromValid,setfromValid] = useState(false)

    const inputTitle = (event)=>{
        setTitle(event.target.value)     
    }
    const inputAmount = (event)=>{
        setAmout(event.target.value)   
    }
    const saveItem = (event)=>{
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmout(0)
    }
    
    useEffect(() => {
        const checkData = title.trim().length>0 && amount!==0
        setfromValid(checkData)     
    },[title,amount])

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className='from-control'>
                    <label>ชื่อรายการ</label>
                    <input type='text' placeholder='รายการ' onChange={inputTitle} value={title}/> 
                </div>
                <div className='from-control'>
                    <label>จำนวนเงิน</label>
                    <input type='number' placeholder='จำนวนเงิน' onChange={inputAmount} value={amount}/> 
                </div>
                <div>
                    <button type='submit' className='btn' disabled={!fromValid}>เพื่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FromComponent