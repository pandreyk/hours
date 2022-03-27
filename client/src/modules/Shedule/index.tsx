import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const ScheduleModule: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <span>{t('Schedule')}</span>
    </>
  )
}

export default ScheduleModule
