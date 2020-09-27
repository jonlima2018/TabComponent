import React from 'react';

function Tab({ id, title, activeTab, onClick }){
    let className = 'tab-list-item';

    if (activeTab === id){
        className += ' tab-list-active';
    }


    return(
        <li
            onClick={() => onClick(id)}
            className={className}
        >
            {title}
        </li>
    )
}

export default Tab;
