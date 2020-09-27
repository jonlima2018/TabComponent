import React, { useState } from 'react';
import Tab from '../Tab';

function Tabs({children, active}){

    const [activeTab, setActiveTab] = useState(active);

    const onClickTabItem = (tab) => {
        setActiveTab(tab);
    }

    return(
        <div className={'tabs'}>
            <ul className={'tab-list'}>
                {children.map((child) => {
                    const {title, id} = child.props;
                    return(
                        <Tab
                            key={id}
                            activeTab={activeTab}
                            id={id}
                            title={title}
                            onClick={onClickTabItem}
                        />
                    );
                })}
            </ul>
            {children.map((child) => {
                    if(child.props.id !== activeTab) return null;
                    return(
                        <div
                            className={'tab-content'}
                            key={child.props.id}>
                            {child.props.children}
                        </div>
                    );
                })}
        </div>
    );


}

export default Tabs;
