import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { SignInForm } from '@/_auth/forms';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
jest.mock('@/constants', () => ({
  ENVIRONMENT: 'development',
}));


test("Renders correctly login", () => {
  const queryClient = new QueryClient();

  const { getByLabelText } = render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>
    </QueryClientProvider>
  )
  const emailElement = getByLabelText('Email')
  expect(emailElement).toBeInTheDocument()

  const passwordElement = getByLabelText('Password')
  expect(passwordElement).toBeInTheDocument()
})
