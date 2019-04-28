import React, { Component } from 'react'
import './PageHeader.scss'
import Navbar from '../Navbar/Navbar'
import { Divider, Grid, GridColumn, GridRow } from 'semantic-ui-react'
import MenuLink from '../MenuLink/MenuLink'
const {getNetworks} = require('indyscan-api')

class PageHeader extends Component {

  constructor (props) {
    super()
    this.state = {
      networks: null
    }
  }

  renderNetworks (networks, activeNetwork) {
    let networkMenuLinks = []
    console.log(`Networks = ${networks}`)
    for (let i = 0; i < networks.length; i++) {
      const network = networks[i]
      networkMenuLinks.push(
        <GridColumn key={network.id} floated="left" width={3}>
          <Grid>
            <Grid.Row>
              <MenuLink active={network.id === activeNetwork}
                        href={`/home?network=${network.id}`}
                        as={`/home/${network.id}`}>
                {network.display}
              </MenuLink>
            </Grid.Row>
          </Grid>
        </GridColumn>
      )
    }
    return networkMenuLinks
  }

  async componentDidMount () {
    const networks = await getNetworks(this.props.baseUrl)
    console.log(`Page header loaded available indy networks: ${JSON.stringify(networks)}`)
    this.setState({networks})
  }

  render () {
    const {network} = this.props
    console.log(`Page header; network = ${network}`)
    return (
      <div>
        <Grid id="page-header">
          <GridRow>
            <h1><span style={{color: 'darkcyan'}}>IndyScan</span></h1>
          </GridRow>
          <GridRow style={{marginTop: '-2em'}}>
            <h5>Hyperledger Indy transaction explorer</h5>
          </GridRow>
          <GridRow>
            {this.renderNetworks(this.state.networks || [network], network)}
            <GridColumn floated="right" width={5}>
              <Grid>
                <GridRow>
                  <Navbar page={this.props.page} network={this.props.network}/>
                </GridRow>
              </Grid>
            </GridColumn>
          </GridRow>

        </Grid>
        <Divider/>
      </div>
    )
  }
}

export default PageHeader
