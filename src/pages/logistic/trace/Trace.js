import { CameraAlt, Scanner, Search } from '@material-ui/icons';
import React from 'react';
import Widget from '../../dashboard/Widget';

function Trace(props) {
    return ( 
        <> 
           <div className='dash'> 
                <div className='widgets'>
                    <Widget 
                        redirect='/search' 
                        title='SEARCH PRODUCT' 
                        link='Search product'
                        backgroundColor='#046350'
                        color='#fff'
                        icon={(
                                <Search
                                    className="icon"
                                    fontSize='medium'
                                    style={{
                                        backgroundColor: "rgba(219, 211, 211, 0.705)",
                                        color: '#000'
                                    }}
                                />
                            )} 
                    />
                    <Widget 
                        redirect='/scan' 
                        title='SCAN PRODUCT' 
                        link='Scan product'
                        backgroundColor='#046350'
                        color='#fff'
                        icon={(
                                <Scanner
                                    className="icon"
                                    fontSize='medium'
                                    style={{
                                        backgroundColor: "rgba(219, 211, 211, 0.705)",
                                        color: '#000'
                                    }}
                                />
                            )} 
                    />
                </div>
                <div className='widgets'>
                    <Widget 
                        redirect='/snap' 
                        title='SNAP PRODUCT' 
                        link='Snap product'
                        backgroundColor='#046350'
                        color='#fff'
                        icon={(
                                <CameraAlt
                                    className="icon"
                                    fontSize='medium'
                                    style={{
                                        backgroundColor: "rgba(219, 211, 211, 0.705)",
                                        color: '#000'
                                    }}
                                />
                            )} 
                    />
                </div>
            </div>  
        </>
    );
}

export default Trace;