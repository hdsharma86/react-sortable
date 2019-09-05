import React, { Component } from 'react';
import Rule from './Rule/Rule';


class Rules extends Component {

    state = {
        rules: ['Rule 1', 'Rule 2', 'Rule 3'],
    };

    addNewRule() {
        console.log('Add New Rule here...');
    }

    addNewCriteria() {
        console.log('Add New Criteria Here...');
    }

    render(){
        return (
            <div className="rules-container">
                <h3>Rules</h3>
                <div onClick={this.addNewRule} className="add-new">+</div>
                <div className="row">
                    <Rule onAddCriteria={() => this.addNewCriteria()} />
                </div>
            </div>
        );
    }

}

export default Rules;