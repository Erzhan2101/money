import React from 'react';

const ExpensesForm = () => {
    return (
        <form className='my-4'>
        <div className="grid">
            <div >
                <label>Дата</label>
                <div>
                    <i className='bx bx-calendar'/><input type="date" className='border-bottom border-success border-top-0 border-end-0 border-start-0'/>
                </div>

            </div>
            <div>
                <label>Название</label>
                <div>
                    <i className='bx bxs-pencil'/> <input type='text' className='border-bottom border-success border-top-0 border-end-0 border-start-0' placeholder='название'/>
                </div>

            </div>
            <div>
                <label>Количество</label>
                <div>
                    <i className='bx bx-dollar'/> <input type='number' className='border-bottom border-success border-top-0 border-end-0 border-start-0' placeholder="0"/>
                </div>

            </div>
        </div>
            <button type="button" className="btn btn-primary d-flex ms-auto mt-4">Добавить</button>
        </form>
    );
};

export default ExpensesForm;