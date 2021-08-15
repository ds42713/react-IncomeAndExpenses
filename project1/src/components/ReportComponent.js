import React from 'react'
import { useContext } from 'react'
import DataContext from '../data/DataContext'
import './ReportComponent.css'

const Reportcpmponent=()=>{
    const {income,expense} = useContext(DataContext)

//ฟังก์ชั่นแปลงรูปแบบตัวเลข
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    
return(
    <div>
        <h1>ยอดคงเหลือ ฿ {formatNumber(income-expense)}</h1>
        <div className='report-container'>
            <div>
                <h4>รายได้ทั้งหมด</h4>
                <p className='report plus'>฿ {formatNumber(income)} </p> 
            </div>
            <div>
                <h4>รายจ่ายทั้งหมด</h4>
                <p className='report minus'>฿ {formatNumber(expense)} </p> 
            </div>
        </div>
    </div>
)
   
}

export default Reportcpmponent