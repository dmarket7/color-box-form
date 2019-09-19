import React, { Component } from "react";
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import uuid from 'uuid/v4';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] }
    this.addItem = this.addItem.bind(this);
    this.remove = this.remove.bind(this);
  }

  addItem(item) {
    let newBox = { ...item, id: uuid() };
    console.log("New Box", newBox)
    this.setState(state => ({
      boxes: [...state.boxes, newBox]
    }))
    console.log("State", this.state)
  }

  remove(id){

    let newBoxList = this.state.boxes.filter(box => box.id !== id)
    this.setState({boxes: newBoxList});
  }

  render() {
    return (
      <div>
        <NewBoxForm addItem={this.addItem}/>
        {this.state.boxes.map(box => {
          return <Box boxInfo={box} key={box.id} remove={this.remove}/>
        })}
      </div>
    )
  }

}

export default BoxList;