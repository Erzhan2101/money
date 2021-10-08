import React from 'react';
import {useSelector} from "react-redux";

const ExpensesList = () => {

    const tasks = useSelector(s => s.tasks.tasks)

    return (
        <>
            <table className="table">
                <thead>
                <tr>
                    <th scope='col'>№</th>
                    <th scope="col">Дата</th>
                    <th scope="col">Название траты</th>
                    <th scope="col">Сколько потратили</th>
                    <th scope="col">Удалить</th>
                </tr>
                </thead>
                <tbody>
                {
                    tasks.map((item, idx) =>
                    <tr>
                    <td>{idx + 1}</td>
                    <td>{item.date}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                    <button className=' btn-d'><i className='bx bx-trash '/>удалить</button>
                    </td>
                    </tr>)
                }
                </tbody>
            </table>
        </>
    );
};

export default ExpensesList;