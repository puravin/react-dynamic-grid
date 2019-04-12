import React, { Component, Fragment } from 'react'

class Card extends Component  {

  constructor(props) {
    super(props)
    this.toggleHandler = this.toggleHandler.bind(this)
  }

  toggleHandler() {
    this.props.update()
  }

  renderCard() {
    const { expanded, styles } = this.props
    const { item } = this.props;
    return (
      <div className={'card'} style={styles}>
        <div>{item}</div>
        <section>
          A
        </section>
        {expanded? this.renderExpandedState() : null}
        <span onClick={this.toggleHandler}>
          expand
        </span>
      </div>
    )
  }

  renderExpandedState() {
    return (
      <Fragment>
        <section>
          B
        </section>
        <section>
          C
        </section>
      </Fragment>
    )
  }

  render() {
    return this.renderCard()
  }
}

export default Card
