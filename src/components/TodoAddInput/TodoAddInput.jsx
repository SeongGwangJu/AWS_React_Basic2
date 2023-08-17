import React from 'react';
import Input from '../Atom/Input/Input';

function TodoAddInput( {onChange} ) {
    return (
        <div>
            <Input type = {onChange} />
        </div>
    );
}

export default TodoAddInput;