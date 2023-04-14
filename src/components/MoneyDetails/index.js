// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {yourBalance, yourIncome, yourExpenses} = props

  return (
    <div>
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
            alt="balance"
            className="balance"
          />
        </div>
        <div>
          <p>Your Balance</p>
          <p>Rs {yourBalance}</p>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
            alt="income"
            className="balance"
          />
        </div>
        <div>
          <p>Your Income</p>
          <p>Rs {yourIncome}</p>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
            alt="expenses"
            className="balance"
          />
        </div>
        <div>
          <p>Your Expenses</p>
          <p>Rs {yourExpenses}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
