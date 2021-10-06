import React from 'react';

const BalanceInfo = () => {
    return (
        <>
            <h1 className="mb-5">Ваш лист расходов</h1>
            <div className='grid'>
                <div className='cart'>
                    <h2 className='m-4'>400,00 $</h2>
                    <div className="cart-gr">
                        <p className='m-4'>начальная сумма</p>
                    </div>
                </div>
                <div className='cart'>
                    <h2 className='m-4'>10,00 $</h2>
                    <div className="cart-r">
                        <p className='m-4'>потратил</p>
                    </div>
                </div>
                <div className='cart'>
                    <h2 className='m-4'>400,00 $</h2>
                    <div className="cart-g">
                        <p className='m-4'>остаток</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default BalanceInfo;