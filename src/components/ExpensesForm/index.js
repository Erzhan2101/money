import React from 'react';
import {useFormik} from "formik";
import * as yup from 'yup'
import {useDispatch} from "react-redux";

const ExpensesForm = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            date: '',
            title: '',
            price: ''
        }, validationSchema: yup.object({
            date: yup.string().required("Выбирите дату!"),
            title: yup.string()
                .max(12, 'Максимум 12 символов!')
                .required('Заполните поле!'),
            price: yup.string().required("Выбирите сумму!")
        }),
        onSubmit: (values) => {
            dispatch({type: 'ADD_COST', payload:values})

        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className='my-4'>
            <div className="grid">
                <div>
                    <label htmlFor='date'>Дата</label>
                    <div><i className='bx bx-calendar'/><input
                        className='border-bottom border-success border-top-0 border-end-0 border-start-0'
                        id='date'
                        type='date'
                        name='date'
                        onChange={formik.handleChange}
                        value={formik.values.date}/>
                        {formik.touched.date && formik.errors.date ? (
                            <div className='text-danger'>{formik.errors.date}</div>) : null}
                    </div>
                </div>
                <div>
                    <label htmlFor='title'>Название</label>
                    <div><i className='bx bxs-pencil'/> <input
                        className='border-bottom border-success border-top-0 border-end-0 border-start-0'
                        id='title'
                        type='text'
                        name='title'
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        placeholder='название'/>
                    </div>
                    {formik.touched.title && formik.errors.title ? (
                        <div className='text-danger'>{formik.errors.title}</div>) : null}
                </div>
                <div>
                    <label htmlFor='price'>Количество</label>
                    <div><i className='bx bx-dollar'/> <input
                        className='border-bottom border-success border-top-0 border-end-0 border-start-0'
                        id='price'
                        type='number'
                        name='price'
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        placeholder="0"/>
                    </div>
                    {formik.touched.price && formik.errors.price ? (
                        <div className='text-danger'>{formik.errors.price}</div>) : null}
                </div>
            </div>
            <button type="submit" className="btn btn-primary d-flex ms-auto mt-4 font">Добавить</button>
        </form>
    );
};

export default ExpensesForm;