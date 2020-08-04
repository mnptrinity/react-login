import React from 'react';

function CustomTextInput(props){
    let { type, name, onChanges } = props;
    return (
        <input type={`${type}`} class="form-control" name={`${name}`} onChange={onChanges} required />
    );
    
}

export default CustomTextInput;