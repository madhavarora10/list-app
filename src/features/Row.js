import React, { useState } from 'react'
import './Row.css'

function Row(props) {
    const [moreDetails, setmoreDetails] = useState(false);
    const viewMoreDetails = (e) => {
        e.preventDefault()
        setmoreDetails(prevState => !prevState);
    }


    return (
        <div >

            {props.dataObjects.map((detials) => {
                return <div className='Row'>

                    <div className='detailsContainer' >

                        <span className='HeadingText'>Index</span>
                        <h1>{detials.id}</h1>
                    </div >
                    <div className='detailsContainer'>
                        <span className='HeadingText'>Name</span>
                        <h1>{detials.name}</h1>
                    </div >
                    <div className='detailsContainer'>
                        <span className='HeadingText'>City</span>
                        <h1>{detials.address.city}</h1>
                    </div>
                    <div className='detailsContainer'>
                        <span className='HeadingText'>Email</span>
                        <h1>{detials.email}</h1>
                    </div>

                {/*     When user clicks on View More   */    }
                
                    {moreDetails && <>
                        <div className='detailsContainer'>
                            <span className='HeadingText'>Website</span>
                            <h1>{detials.website}</h1>
                        </div>
                        <div className='detailsContainer'>
                            <span className='HeadingText'>Phone</span>
                            <h1>{detials.phone}</h1>
                        </div>
                        <div className='detailsContainer'>
                            <span className='HeadingText'>Company</span>
                            <h1>{detials.company.name}</h1>
                        </div>
                        <div className='detailsContainer'>
                            <span className='HeadingText'>Username</span>
                            <h1>{detials.username}</h1>
                        </div>
                    </>
                    }
                    <button onClick={viewMoreDetails}>{moreDetails ? 'View less' : 'View More'}

                    </button>


                </div>

            })}
        </div>
    )
}

export default Row