import { render, screen } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';

test('renders the RegistrationForm component', () => {
  render(<RegistrationForm />);
  
  // Use screen to query for an element from the rendered component
  const headerElement = screen.getByText(/Customized SOP Generator/i);
  expect(headerElement).toBeInTheDocument();
});
