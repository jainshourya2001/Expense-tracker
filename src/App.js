import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import React,{useState} from 'react';
import NewExpense from "./components/NewExpense/NewExpense";


let DUMMY_EXPENSE=[
    // {
    //     id:'e1',
    //     title:'school Fee',
    //     amount:250,
    //     date:new Date(2021,5,12)
    // },
    // {
    //     id:'e2',
    //     title:'Books',
    //     amount:230,
    //     date:new Date(2021,2,22)
    // },
    // {
    //     id:'e3',
    //     title:'House Rent',
    //     amount:700,
    //     date:new Date(2021,4,2)
    // },
    // {
    //     id:'e4',
    //     title:'Foods',
    //     amount:540,
    //     date:new Date(2021,5,5)
    // }
];
const App = () => {
    // let expenseDate = new Date(2021,3,28);
    // let expenseTitle="school fee";
    // let expenseAmount=300;
    
    const [expenses,setExpenses] = useState(DUMMY_EXPENSE);

    fetch()

    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
    }
    

    return(
        <div>
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses item={expenses}></Expenses>
        </div>
    )
}

export default App;