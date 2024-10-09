import React from 'react';

function withAuthentication(WrappedComponent) {
  return function EnhancedComponent(props) {
    const isAuthenticated = false; // Toggle this between true and false

    if (!isAuthenticated) {
      // Show the following message if user is not authenticated
      return <p>Please log in to view this page.</p>;
      
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuthentication;