export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      fakeAuth.isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/NoAccessToResource',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )

  