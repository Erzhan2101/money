import React from 'react';

const ExpensesList = () => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Дата</th>
                <th scope="col">Название траты</th>
                <th scope="col">Сколько потратили</th>
                <th scope="col">Удалить</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>21-01-98</td>
                <td>Mark2</td>
                <td>200$</td>
                <td><button className=' btn-d'><i className='bx bx-trash'/>удалить</button></td>
            </tr>
            </tbody>
        </table>
    );
};

export default ExpensesList;