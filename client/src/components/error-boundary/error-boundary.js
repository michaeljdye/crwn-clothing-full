import React, { Component } from 'react'

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './error-boundary.styles'

class ErrorBoundary extends Component {
  state = {
    hasErrored: false
  }

  static getDerivedStateFromError(error) {
    // Process the error
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error)
  }

  render() {
    const { hasErrored } = this.state
    const { children } = this.props

    if (hasErrored)
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={'https://i.imgur.com/A040Lxr.png'} />
          <ErrorImageText>This Page is Lost in Space</ErrorImageText>
        </ErrorImageOverlay>
      )

    return children
  }
}

export default ErrorBoundary
