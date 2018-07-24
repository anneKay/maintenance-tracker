import React from 'react';

const EditExpensify = (props) => (
    <div>
         Edit Message from expenses with id {props.match.params.id}
    </div>
);
 export default EditExpensify;