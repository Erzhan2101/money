import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "../../redux/actions/tasksActions";

const ExpensesList = () => {

    const tasks = useSelector(s => s.tasks.tasks)
    const dispatch = useDispatch()

    const sortTasks = () => {
       dispatch({type: 'SORT_TASKS'})
    }

    return (
        <>
            {
                tasks.length ?
                    <table className="table">
                    <thead>
                    <tr>
                        <th scope='col'>№</th>
                        <th scope="col">Дата</th>
                        <th scope="col">Название траты</th>
                        <th onClick={sortTasks} scope="col">Сумма<i className='bx bx-sort'/></th>
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
                                    <button onClick={() => dispatch(removeFromCart(idx))} className=' btn-d'><i className='bx bx-trash '/>удалить</button>
                                </td>
                            </tr>)
                    }
                    </tbody>
                </table> : <h2>Список пуст</h2>
            }
        </>
    );
};

export default ExpensesList;