import React from 'react';

export default (): any => {
    return (
        <div className='ikc__content-projects'>
            <h2>PROJETOS</h2>
            <span>Conheça alguns dos nossos projetos</span>

            <div className='ikc__content-projects-button'>
                <button className='is--active' data-id='todos'>TODOS</button>
                <button data-id='arquitetonico'>ARQUITETONICO</button>
                <button data-id='interiores'>INTERIORES</button>
            </div>
        </div>
    )
}