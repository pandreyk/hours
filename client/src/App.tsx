import React from 'react'
import Routes from 'pages/routes'

const App: React.FC = () => {
  return (
    <>
      <Routes localStoreHasJWT={true} authed={true} role={'Admin'} />
    </>
  )
}

export default App
