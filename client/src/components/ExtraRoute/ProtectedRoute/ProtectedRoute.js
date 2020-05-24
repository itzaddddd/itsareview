import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const ProtectedRoute = ({component: Component, user, ...rest}) => (
        <Route 
            {...rest}
            render = { props => {
                if(user.token){
                    return <Component {...props} />; 
                  }else{
                      return (
                          <Redirect 
                              to = {{
                                 pathname: "/login",
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

export default connect(mapStateToProps,null)(ProtectedRoute);