import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'vitest-axe';
import { AnimatedSection } from '@/components/AnimatedSection';
import { GridPattern } from '@/components/GridPattern';

describe('Accessibility Tests', () => {
  describe('AnimatedSection', () => {
    it('should not have any automatically detectable accessibility issues', async () => {
      const { container } = render(
        <AnimatedSection>
          <h1>Accessible Content</h1>
          <p>This is a test paragraph for accessibility.</p>
        </AnimatedSection>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('maintains proper heading hierarchy', async () => {
      const { container } = render(
        <div>
          <h1>Main Title</h1>
          <AnimatedSection>
            <h2>Subtitle</h2>
            <p>Content</p>
          </AnimatedSection>
        </div>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('GridPattern', () => {
    it('should not have any automatically detectable accessibility issues', async () => {
      const { container } = render(<GridPattern />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Basic HTML Elements', () => {
    it('button with accessible text passes', async () => {
      const { container } = render(
        <button aria-label="Click me">Submit</button>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('image with alt text passes', async () => {
      const { container } = render(
        <img src="test.jpg" alt="Test image description" />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('form with labels passes', async () => {
      const { container } = render(
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </form>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
