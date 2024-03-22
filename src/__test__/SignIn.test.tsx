import '@testing-library/jest-dom'
import { render} from "@testing-library/react"
import { SignInForm } from '@/_auth/forms';
import { MemoryRouter } from 'react-router-dom';
jest.mock('@/constants', () => ({
  ENVIRONMENT: 'development',
}));


test("Renders correctly login", () => {
  const {getByLabelText} = render(<MemoryRouter><SignInForm /></MemoryRouter>)
  const emailElement = getByLabelText('Email')
  expect(emailElement).toBeInTheDocument()

  const passwordElement = getByLabelText('Password')
  expect(passwordElement).toBeInTheDocument()
})
