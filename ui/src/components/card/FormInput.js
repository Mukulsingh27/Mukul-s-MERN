import React from 'react'

const FormInput = (props) => {
    return (
        <>
            <div className={props.class}>
                <label for="exampleFormControlInput1" className="form-label">{props.name}</label>
                <input type={props.type} className="form-control" id="exampleFormControlInput1" 
                placeholder={props.placeholder} 
                onChange = {(event) => props.onChange(event.target.value)}
                value = {props.setValue}
                />
            </div>
        </>
    )
}

export default FormInput
