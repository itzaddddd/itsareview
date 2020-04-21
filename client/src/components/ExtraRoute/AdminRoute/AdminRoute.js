import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const delay = ms => new Promise(res => setTimeout(res, ms));
const AdminRoute = ({component: Component, user, ...rest}) => (
        <Route 
            {...rest}
            render = { props => {
                if(user.token){
                    return <Component {...props} />;
                  }else{
                      return (
                          <Redirect 
                              to = {{
                                 pathname: "/",
                                  state: {
                                     from: props.location
                                  }
                             }}
                          />
                     )
                  }
                }
            }
        />
    )
    
const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,null)(AdminRoute);
