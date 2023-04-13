import React from 'react';
import './pagenotfound.css';

const PageNotFound = () => {
    return (
        <>
            
                <div className="containr">

                    <div className="text-center">
                        <div className="background-img">
                            <h1 className="text-center ">Page Not Found (⌣̩̩́_⌣̩̩̀)</h1>
                        </div>
                        <div className="contant_box">
                            <h3 className="h2">Look like you're lost</h3>
                            <p>the page you are looking for not avaible!</p>
                            <a href="/Login" className="link">
                                Go to Home
                            </a>
                        </div>
                    </div>

                </div>
            

        </>
    )
}

export default PageNotFound
