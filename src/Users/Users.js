import React from 'react';
import User from './User/User';

const users = () => {
    return (
        <React.Fragment>
            <h3>Users</h3>
            <div className="row">
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
        </React.Fragment>
    );
}

export default users;