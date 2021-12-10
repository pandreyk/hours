import React, { useState } from 'react'
import { getUser } from 'helpers/currentUser'
import Routes from 'pages/routes'
import { useTranslation } from 'react-i18next'

const App: React.FC = () => {
  const { i18n } = useTranslation()
  const [localStoreHasJWT, setLocalStoreHasJWT] = useState<boolean>(
    Boolean(getUser()),
  )

  return (
    <>
      <Routes localStoreHasJWT={false} authed={false} role={'Admin'} />
    </>
  )
}

export default App
