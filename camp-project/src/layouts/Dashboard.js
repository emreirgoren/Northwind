//rfc
import React from 'react'
import { GridRow } from 'semantic-ui-react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'

export default function Dashboard() {
  return (
    <div>
      <Grid>

        <GridRow>

          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>

          <Grid.Column width={12}>

            <Routes>

              <Route exact path="/" Component={ProductList} />
              <Route exact path="/products" Component={ProductList} />
              <Route path="/products/:name" Component={ProductDetail} />
              <Route exact path='/cart' Component={CartDetail} />

            </Routes>

          </Grid.Column>

        </GridRow>

      </Grid>


    </div>
  )
}
