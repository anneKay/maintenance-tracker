import React from 'react';

const SinglePortfolio = (props) => (
    <div>
         This is the portfolio has id of {props.match.params.id}
    </div>
);
 export default SinglePortfolio;
