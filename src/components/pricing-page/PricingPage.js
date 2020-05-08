import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

const useStyles = makeStyles( theme => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  gridContainer: {
    // flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 5)
    }
  },
  plansSummary: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > div': {
      textAlign: 'center',
      padding: theme.spacing(4, 0)
    }
  },
  pricing: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: theme.spacing(1),
    '& > h4': {
      marginRight: theme.spacing(0.5)
    }
  },
  benefits: {
    marginBottom: 'auto',
    '& > div': {
      display: 'flex',
      margin: theme.spacing(1, 0),
      '& > svg': {
        marginRight: theme.spacing(1)
      }
    }
  },
  card: {
    height: '96%',
  },
  action: {
    marginBottom: theme.spacing(4)
  },
  cardContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  actionButton: {
    borderRadius: '36px',
    textTransform: 'capitalize',
  }
}))

const PricingPage = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <div className={classes.plansSummary}>
        <div>
          <Typography variant="h3" gutterBottom>Pricing plans</Typography>
          <Typography variant="body1">Choose a plan that works best for you.</Typography>
          <Typography variant="body1">if you are not happy with a plan, you can always switch.</Typography>
        </div>
      </div>
      <Grid container className={classes.gridContainer} justify="center" alignItems="stretch" spacing={4}>
        <Grid item xs={12} sm={4} md={4}>
          <Card className={classes.card} style={{ backgroundColor: 'rgba(205, 127, 50, 0.20)' }}>
            <CardContent className={classes.cardContent}>
              <div className={classes.pricing}>
                <Typography variant="h4">$2.75</Typography>
                <Typography variant="h6">/month</Typography>
              </div>
              <Typography variant="h6">bronze</Typography>
              <Typography variant="caption">Generous limits to get started</Typography>
              <div className={classes.benefits}>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Single domain one click wordpress install</Typography>
                </div>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Free WordPress/cPanel Website Transfer</Typography>
                </div>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Free SSL Certificate</Typography>
                </div>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Free Domain Included</Typography>
                </div>
              </div>
              <div className={classes.action}>
                <Button variant="contained" className={classes.actionButton} size="large" color="primary">Select plan</Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card className={classes.card} style={{ backgroundColor: 'rgba(192, 192, 192, 0.20)'}}>
            <CardContent className={classes.cardContent}>
              <div className={classes.pricing}>
                <Typography variant="h4">$3.95</Typography>
                <Typography variant="h6">/month</Typography>
              </div>
              <Typography variant="h6">silver</Typography>
              <Typography variant="caption">Enthusiasts who want more</Typography>
              <div className={classes.benefits}>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Unlimited Domains One Click WordPress Installs</Typography>
                </div>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Free WordPress/cPanel Website Transfer</Typography>
                </div>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Unmetered Bandwidth</Typography>
                </div>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Free SSL Certificate</Typography>
                </div>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Free Domain Included</Typography>
                </div>
              </div>
              <div className={classes.action}>
                <Button variant="contained" className={classes.actionButton} size="large" color="primary">Select plan</Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card className={classes.card} style={{ backgroundColor: 'rgba(255, 223, 0, 0.2)' }}>
            <CardContent className={classes.cardContent}>
              <div className={classes.pricing}>
                <Typography variant="h4">$5.95</Typography>
                <Typography variant="h6">/month</Typography>
              </div>
              <Typography variant="h6">gold</Typography>
              <Typography variant="caption">for entreprises and business purposes</Typography>
              <div className={classes.benefits}>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Unlimited Domains One Click WordPress Installs</Typography>
                </div>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Free WordPress/cPanel Website Transfer</Typography>
                </div>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Unmetered Bandwidth</Typography>
                </div>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Free SSL Certificate</Typography>
                </div>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Free Upgrade to Positive SSL</Typography>
                </div>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Free Dedicated IP</Typography>
                </div>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Free SEO Tools</Typography>
                </div>
                <div>
                  <CheckCircleIcon />
                  <Typography variant="body1">Free Domain Included</Typography>
                </div>
              </div>
              <div className={classes.action}>
                <Button variant="contained" className={classes.actionButton} size="large" color="primary">Select plan</Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
 
export default PricingPage;
