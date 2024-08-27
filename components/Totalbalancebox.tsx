import { formatAmount } from '@/lib/utils'
import { Section } from 'lucide-react'
import React from 'react'
import CountUp from 'react-countup/build/CountUp'
import DoughnutChart from './DoughnutChart'


const Totalbalancebox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section className = "total-balance">
    <div className = "total-balance-chart">
    <DoughnutChart accounts={accounts}/>
    </div>
    <div className ="flex flex-col gap-6" >
        <h2 className= "header-2">
            Bank Accounts : {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
            <p className="total-balance-label">
                Total Current Balance 
            </p>
            <p className="total-balance-amount flex-center gap-2">

                ${totalCurrentBalance} 
            </p>

        </div>
    </div>
    </section>
  )
}

export default Totalbalancebox