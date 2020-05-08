import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import PricingPage from './components/pricing-page/PricingPage'

const useStyles = makeStyles({
  app: {
    height: '100%'
  }
})

function App() {
  const classes = useStyles()

  return (
    <div className={clsx('App', classes.app)}>
      <PricingPage />
    </div>
  )
}

export default App
