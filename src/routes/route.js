import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import PrimaryLayout from '../layout/primary'
import SecondaryLayout from '../layout/secondary'

export default function RouteWrapper({ component: Component, layout, nav, ...rest }) {
  let currentLayout
  switch (layout) {
    case 'primary':
      currentLayout = PrimaryLayout
      break
    case 'secondary':
      currentLayout = SecondaryLayout
      break
  }
  const Layout = currentLayout

  return (
    <Route
      {...rest}
      render={props => (
        <Layout nav={nav}>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
}
