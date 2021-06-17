import React from 'react';
import '../Error/Error.css';

const Error = ({child}) => {
    return(
        <div>
            <div className="xs:text-center sm:text-center md:text-center mx-auto mt-3 error">


                {child}
            </div>

        </div>
    );
};
export default Error;