import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import H1 from '@/components/Atoms/H1';

describe('H1', () => {
  const title = 'Test Title';

  test('renders the title correctly', () => {
    const { getByText } = render(<H1 title={title} />);
    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders a header correctly', () => {
    const { getByRole } = render(<H1 title={title} />);
    const header = getByRole('heading');
    expect(header).toHaveTextContent(title);
  });
});
