import React, { Component } from 'react'
import Provider from './Providers'
import './style.scss'
import { init } from '@binance/sentry-miniapp'

declare const COMMIT_ID: string
declare const env: any
export function getEnv() {
  if (env.API_HOST && !(env.API_HOST.includes('qa1fdg') || env.API_HOST.includes('devfdg'))) {
    return 'prod'
  }
  if (env.API_HOST && env.API_HOST.includes('qa1fdg')) {
    return 'qa'
  }
  if (env.API_HOST && env.API_HOST.includes('devfdg')) {
    return 'dev'
  }
  return 'local'
}

init({
  dsn: 'https://c4641904bb124a01adcbf53b19b94f3d@o529943.ingest.sentry.io/6227528',
  autoSessionTracking: true,
  tracesSampleRate: 1,
  environment: getEnv(),
  release: `${COMMIT_ID}`,
})

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    const { children } = this.props
    return <Provider>{children}</Provider>
  }
}

export default App