import { compose } from 'redux'
import { connect } from 'react-redux'
import { establishConnection } from './withWeb3/reducer'

import withWeb3Connection from './withWeb3/component'
import withLayout from './withLayout/component'

const withPage = (Component) =>
  compose(
    connect(null, {
      initializeWeb3: establishConnection
    }),
    withWeb3Connection,
    withLayout
  )(Component)

export default withPage
