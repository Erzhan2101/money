import React from 'react';
import Header from "./components/Header";
import BalanceInfo from "./components/BalanceInfo";
import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";
import ModalUser from "./components/ModalUser";


const App = () => {

    return (
        <>
            <Header/>
            <div className='container py-3'>
                <BalanceInfo/>
                <ExpensesForm/>
                <ExpensesList/>
            </div>
            <ModalUser/>
        </>
    );
};

export default App;