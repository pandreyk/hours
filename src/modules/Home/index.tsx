import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <span>{t('Home')}</span>
    </>
  )
}

export default Home
