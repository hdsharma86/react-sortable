import React from 'react';

const course = (props) => {
    return (
        <div className="col-xs-6 col-md-3">
            <div className="thumbnail" style={{padding:'15px'}}>
                <h5>{props.title}</h5>
                <p>Morbi erat arcu, placerat vitae pharetra non, aliquet ac nunc. Maecenas hendrerit metus consectetur</p>
                <p><button onClick={props.clicked} className="btn btn-default">View Detail</button></p>
            </div>
        </div>
    );
}

export default course;