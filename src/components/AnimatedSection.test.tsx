import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AnimatedSection } from './AnimatedSection';

describe('AnimatedSection', () => {
  it('renders children correctly', () => {
    render(
      <AnimatedSection>
        <div>Test Content</div>
      </AnimatedSection>
    );
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <AnimatedSection className="custom-class">
        <div>Test</div>
      </AnimatedSection>
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders with different directions', () => {
    const directions = ['up', 'down', 'left', 'right'] as const;
    
    directions.forEach(direction => {
      render(
        <AnimatedSection direction={direction}>
          <div>Test {direction}</div>
        </AnimatedSection>
      );
      
      expect(screen.getByText(`Test ${direction}`)).toBeInTheDocument();
    });
  });

  it('renders without delay by default', () => {
    render(
      <AnimatedSection>
        <div>No delay</div>
      </AnimatedSection>
    );
    
    expect(screen.getByText('No delay')).toBeInTheDocument();
  });
});
