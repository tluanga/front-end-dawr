import React from 'react'
import SupplierForm from './SupplierForm'
import SuppliersTable from './SuppliersTable'
import {Switch, Route} from 'react-router-dom'
import SupplierDetail from './SupplierDetail';



function Supplier() {
    
    return (
      <div>
        
        <SuppliersTable/>
        
          <Switch>
            <Route
              exact
              path='/'
              component={SuppliersTable}
            />
            
            <Route
                exact
                path='/suppliers/:id'              
                component={SupplierDetail}
            />           
          </Switch>        
      </div>
    );
}

export default Supplier
