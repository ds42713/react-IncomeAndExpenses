import './FromComponent.css'



const FromComponent = ()=>{
    const inputTitle = (event)=>{
        console.log(event.target.value)
    }
    const inputAmount = (event)=>{
        console.log(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault()
        console.log('save')
    }

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className='from-control'>
                    <label>ชื่อรายการ</label>
                    <input type='text' placeholder='รายการ' onChange={inputTitle}/> 
                </div>
                <div className='from-control'>
                    <label>จำนวนเงิน</label>
                    <input type='number' placeholder='จำนวนเงิน' onChange={inputAmount}/> 
                </div>
                <div>
                    <button type='submit' className='btn'>เพื่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FromComponent