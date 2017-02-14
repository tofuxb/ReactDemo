import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as AppActions from 'actions'

class App extends Component {
  render () {
    return (
      <div className="app"></div>
    )
  }
}

function mapStateToProps (state) {
  const { todos } = state
  return {
    todos
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect({
  mapStateToProps,
  mapDispatchToProps
})(App)
