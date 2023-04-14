import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionsHistoryList: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

  render() {
    const {balance, income, expenses} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <div>
            <h1>Hi,Richard</h1>
            <p>
              Welcome back to your<span>Money Manager</span>
            </p>
          </div>
          <div>
            <MoneyDetails
              yourBalance={balance}
              yourIncome={income}
              yourExpenses={expenses}
            />
          </div>
          <div>
            <form>
              <h1>Add Transaction</h1>
              <label htmlFor="title" className="title">
                TITLE
              </label>
              <input id="title" placeholder="TITLE" type="text" />
              <label htmlFor="amount" className="amount">
                Amount
              </label>
              <input type="text" id="amount" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
