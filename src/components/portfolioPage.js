import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
    return (
        <div>
            <h1>This is a Portfolio page</h1>
            <Link to="/portfolio/1">Itemone</Link>
            <Link to="/portfolio/2">ItemTwo</Link>

        </div>
    )
}
export default PortfolioPage;