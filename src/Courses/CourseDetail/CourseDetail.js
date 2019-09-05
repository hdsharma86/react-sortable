import React from 'react';
import { withRouter } from 'react-router-dom';

const courseDetail = (props) => {
    console.log(props);
    const query = new URLSearchParams(props.location.search);
    let title = null;
    for (let param of query.entries()) {
        if(param[0] === 'title'){
            title = param[1];
        }
    }
    
    return (
        <div className="thumbnail">
            <h5>{title}</h5>
            <p>Donec dapibus interdum erat ut malesuada. Mauris non massa eu tellus mollis blandit blandit et est. Ut ac dolor eget metus tincidunt tempus dapibus in tortor. Etiam at lacus ac sapien ultricies mattis. Vestibulum porttitor, quam malesuada ultricies varius, felis arcu euismod sapien, a pretium magna lectus at enim. Aenean iaculis at felis ac euismod. In nibh velit, gravida in placerat eget, rhoncus at neque. Sed magna magna, luctus quis purus vitae, semper condimentum leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
        </div>
    );
}

export default withRouter(courseDetail);