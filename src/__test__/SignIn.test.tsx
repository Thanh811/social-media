import '@testing-library/jest-dom'
import { render, fireEvent } from "@testing-library/react"
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
        <SignInForm submitEvent={()=>{}}/>
      </MemoryRouter>
    </QueryClientProvider>
  )
  const emailElement = getByLabelText('Email')
  expect(emailElement).toBeInTheDocument()

  const passwordElement = getByLabelText('Password')
  expect(passwordElement).toBeInTheDocument()
})


it("should function submit not fire when email and password is null", async () => {
  const queryClient = new QueryClient();

  const onSubmit = jest.fn();
  const {getByRole, findByText, getByLabelText} = render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <SignInForm submitEvent={onSubmit}/>
      </MemoryRouter>
    </QueryClientProvider>
  );
  fireEvent.input(getByRole("textbox", { name: /email/i }), {
    target: {
      value: "",
    },
  })
  fireEvent.input(getByLabelText("Password"), {
    target: {
      value: "",
    },
  })

  fireEvent.submit(getByRole("button"))
  expect(await findByText("Log in")).toBeInTheDocument()
  expect(onSubmit).not.toHaveBeenCalled()
});

test("validate email", async () => {
  const queryClient = new QueryClient();

  const onSubmit = jest.fn();
  const {getByRole, findByText, findAllByRole} = render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <SignInForm submitEvent={onSubmit}/>
      </MemoryRouter>
    </QueryClientProvider>
  );
  fireEvent.input(getByRole("textbox", { name: /email/i }), {
    target: {
      value: "",
    },
  })
  fireEvent.submit(getByRole("button"))
  expect(await findAllByRole("alert")).toHaveLength(1)
  expect(await findByText("Log in")).toBeInTheDocument()
  expect(getByRole("textbox", { name: /email/i })).toHaveValue("")
  expect(onSubmit).not.toHaveBeenCalled()
})
