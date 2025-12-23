import React from 'react'
import './Features.css'
import FeatureCard from './FeatureCard'
import sales from '../../assets/sales.png'
import parties from '../../assets/parties.png'
import purchase from '../../assets/purchase.png'
import product from '../../assets/product.png'
import duelist from '../../assets/duelist.png'
import income from '../../assets/income.png'
import expense from '../../assets/expense.png'
import stock from '../../assets/stock.png'
import lossprofit from '../../assets/lossprofit.png'
import report from '../../assets/report.png'
import language from '../../assets/language.png'



const Features = () => {

  const featureList = [
    { title: "Refunds", image: sales, bgColor: " #FFD4D5", },
    { title: "Sales", image: sales, bgColor: "#BED8FF", },
    { title: "Parties", image: parties, bgColor: " #FEE8C2", },
    { title: "Purchase", image: purchase, bgColor: " #BCEBD7", },
    { title: "Products", image: product, bgColor: " #D3C6F5", },
    { title: "Due List", image: duelist, bgColor: " #FFD4D5", },
    { title: "Income", image: income, bgColor: " #F7C5FF", },
    { title: "Expense", image: expense, bgColor: "#BED8FF", },
    { title: "Stock", image: stock, bgColor: " #FEE8C2 ", },
    { title: "Loss / Profit", image: lossprofit, bgColor: "#BED8FF", },
    { title: "Report", image: report, bgColor: "  #D3C6F5", },
    { title: "47+ Languages", image: language, bgColor: "#BCEBD7 ", },

  ]
  return (
    <section className='feature-section'>
      <h2 className='features-heading'>Our Amazing Features</h2>

      <div className='features-grid'>
        {featureList.map((item, index) => (
          <FeatureCard key={index} title={item.title} image={item.image} bgColor={item.bgColor} />
        ))}
      </div>
    </section>
  )
}

export default Features
