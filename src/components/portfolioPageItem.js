import React from 'react';

const PortfolioPageItem = (props) => {
    return (
        <div>
            <h1>This is a Portfolio page item</h1>
            <p>A thing i have done</p>
            <p>This is a portfolio id of { props.match.params.id }</p>
        </div>
    )
}
export default PortfolioPageItem;