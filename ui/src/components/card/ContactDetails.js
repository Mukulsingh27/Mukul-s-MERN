import React from 'react'

const ContactDetails = (props) => {
    return (
        <>
            <h5 className="my-3">
                {props.left} : <strong className="brand-name"> {props.right}</strong>
            </h5>
        </>
    )
}

export default ContactDetails
