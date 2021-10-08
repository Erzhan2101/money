import React from 'react';
import {resetAll} from "../../redux/actions/tasksActions";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const dispatch = useDispatch()
    const username = useSelector((s) => s.user.name)
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <h3 className="navbar-brand" >{username}`s money</h3>
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <button  onClick={() => dispatch(resetAll())} className=' btn-d'>СБРОСИТЬ ВСЁ</button>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;