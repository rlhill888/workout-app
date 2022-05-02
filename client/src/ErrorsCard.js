import React from "react";


function ErrorsCard({errors}){

    if(errors.length === 0){
        return <> </>
    }
    return(
        <div>
            <h2>Error</h2>
            <ol>
                {errors.map(error=>{
                    return <li key={`${error} error`}> {error}</li>
                })}
            </ol>
            <br />
        </div>
    )
}

export default ErrorsCard