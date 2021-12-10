import React from 'react'
import { Formik, Form, Field, FormikProps } from 'formik'
import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'
import { Button } from 'generic/Button'
import {
  Container,
  FieldsContainer,
  BackgroundTop,
  BackgroundBottom,
  LogoWrapper,
  Content,
} from './styles'
import { Input } from 'generic/Input'

interface ILoginForm {
  Username: string
  Password: string
}

const Login: React.FC = () => {
  const { t } = useTranslation()

  const initValues = {
    Username: '',
    Password: '',
  }

  const validationSchema = Yup.object().shape({
    Username: Yup.string().required(t('RequiredField')),
    Password: Yup.string().required(t('RequiredField')),
  })

  const handleSubmit = async (values: any) => {
    console.log('values', values)
  }

  return (
    <Container>
      <BackgroundTop />
      <BackgroundBottom />
      <LogoWrapper>
        <span>Logo</span>
      </LogoWrapper>

      <Content>
        <Formik
          initialValues={initValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(props: FormikProps<ILoginForm>) => (
            <Form>
              <FieldsContainer>
                <span>{t('Welcome')}</span>
                <Field
                  placeholder={t('Username')}
                  type="text"
                  name="Username"
                  label={t('Username')}
                  component={Input}
                />
                <Field
                  placeholder={t('Password')}
                  type="password"
                  name="Password"
                  label={t('Password')}
                  component={Input}
                />
                <Button disabled={props.isSubmitting}>{t('Button')}</Button>
              </FieldsContainer>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  )
}

export default Login
