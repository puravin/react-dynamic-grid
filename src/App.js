import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'

const NUMBER_OF_CARDS = 2
const MAX_HEIGHT = 500;
const MAX_HEIGHT_BASIC_CARD = 150 + 5 + 1
const MAX_WIDTH_BASIC_CARD = 100 + 10 + 5 + 1
const MAX_HEIGHT_EXPANDED_CARD = MAX_HEIGHT
const MAX_WIDTH_EXPANDED_C_CARD = 250

class App extends Component {

  constructor(props) {
    super(props)

    const initialGrid = new Array(NUMBER_OF_CARDS).fill(0, 0, NUMBER_OF_CARDS)

    this.state = {
      expandedGrid: [],
      basicGrid: initialGrid.map((i, k) => i + k)
    }
    this.basicGrid = React.createRef();
  }

  updateBasicGrid(updateKey) {
    const { expandedGrid, basicGrid } = this.state;
    const focusedGridCopy =  [...basicGrid]
    const updatedItem = basicGrid[updateKey]
    focusedGridCopy.splice(updateKey, 1)
    this.setState({
      expandedGrid: [...expandedGrid, updatedItem],
      basicGrid: focusedGridCopy
    })
  }

  updateExpandGrid(updateKey) {
    const { expandedGrid, basicGrid } = this.state;
    const focusedGridCopy =  [...expandedGrid]
    const updatedItem = expandedGrid[updateKey]
    focusedGridCopy.splice(updateKey, 1)
    this.setState({
      expandedGrid: focusedGridCopy,
      basicGrid: [...basicGrid, updatedItem]
    })
  }

  render() {
    const { basicGrid, expandedGrid } = this.state
    const node = this.basicGrid;
    const basicCardArea = MAX_HEIGHT_BASIC_CARD * MAX_WIDTH_BASIC_CARD
    const totalBasicCards = basicGrid.length
    console.log(totalBasicCards)
    const totalAreaRequired = basicCardArea * totalBasicCards
    console.log(totalAreaRequired)
    const basicGridWidth = totalAreaRequired / MAX_HEIGHT
    if (node.current) {
      console.log(node.current.clientHeight)
    }
    return (
      <div className="App">
        <div className="App-header">
          <header>Dynamic Grid</header>
          <div className='grids'>
            <div
              className='expanded-grid'
              style={{
                maxHeight: MAX_HEIGHT
              }}
            >
              {expandedGrid.map((gridItem, key) => {
                return (
                  <Card
                    key={key}
                    item={gridItem}
                    styles={{
                      height: MAX_HEIGHT_EXPANDED_CARD,
                      width: MAX_WIDTH_EXPANDED_C_CARD
                    }}
                    update={() => this.updateExpandGrid(key)}
                    expanded
                  >
                  </Card>
                )
              })}
            </div>
            <div
              className='basic-grid'
              style={{
                height: MAX_HEIGHT,
                width: basicGridWidth
              }}
              ref={this.basicGrid}
            >
              {basicGrid.map((gridItem, key) => {
                return (
                  <Card
                    key={key}
                    item={gridItem}
                    styles={{
                      height: MAX_HEIGHT_BASIC_CARD,
                      width: 'auto'
                    }}
                    update={() => this.updateBasicGrid(key)}
                  >
                  </Card>
                )

              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
