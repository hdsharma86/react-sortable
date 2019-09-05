import React, { Component } from 'react';
import Criteria from '../Criteria/Criteria';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = SortableElement(({value,clicked}) => {
    return (
        <li>
            {value}
            <div onClick={()=> handleClick()} className="add-new">+</div>
            <Criteria />
        </li>
    )
});

const SortableList = SortableContainer(({items, clicked}) => {
  return (
    <ul className="sort-container">
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} 
            index={index} 
            value={value} 
            clicked={() => clicked()}/>
      ))}
    </ul>
  );
});

function handleClick(value){
    console.log('Hi');
}

class Rule extends Component {
    constructor(props) {
        super(props);
    }
    
    state = {
        items: ['Rule 1', 'Rule 2'],
    };

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };

    render() {
        return (
            <SortableList 
                items={this.state.items} 
                onSortEnd={this.onSortEnd} 
                clicked={() => this.props.onAddCriteria()}
                />
        )
    }
}

export default Rule;