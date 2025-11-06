import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GridPattern } from './GridPattern';

describe('GridPattern', () => {
  it('renders without crashing', () => {
    const { container } = render(<GridPattern />);
    expect(container).toBeInTheDocument();
  });

  it('has fixed positioning and pointer-events-none', () => {
    const { container } = render(<GridPattern />);
    const gridElement = container.firstChild as HTMLElement;
    
    expect(gridElement).toHaveClass('fixed');
    expect(gridElement).toHaveClass('pointer-events-none');
  });

  it('renders with proper z-index', () => {
    const { container } = render(<GridPattern />);
    const gridElement = container.firstChild as HTMLElement;
    
    expect(gridElement).toHaveClass('z-0');
  });
});
