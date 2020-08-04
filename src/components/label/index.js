import React from 'react';

function FieldLabel(props){
    const { textLabel, classStyle, } = props;
    return (
        <label class={`${classStyle}`}>{`${textLabel}`}</label>

    );
}
export default FieldLabel;