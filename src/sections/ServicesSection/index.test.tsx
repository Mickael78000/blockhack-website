import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ServicesSection } from './index';

describe('ServicesSection', () => {
  it('renders the main heading', () => {
    render(<ServicesSection />);
    
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders all three service cards', () => {
    render(<ServicesSection />);
    
    // Check for service titles
    expect(screen.getByText(/Audits de Smart Contracts Solana et EVM/i)).toBeInTheDocument();
    expect(screen.getByText(/Outils d'audit sur mesure/i)).toBeInTheDocument();
    expect(screen.getByText(/Renforcement de la sécurité/i)).toBeInTheDocument();
  });

  it('renders service descriptions', () => {
    render(<ServicesSection />);
    
    // Check for partial description text
    expect(screen.getByText(/Revues manuelles complètes/i)).toBeInTheDocument();
    expect(screen.getByText(/scanners propriétaires/i)).toBeInTheDocument();
    expect(screen.getByText(/Ateliers, guides opérationnels/i)).toBeInTheDocument();
  });

  it('renders service icons with proper alt text', () => {
    render(<ServicesSection />);
    
    expect(screen.getByAltText('audit assessment icon')).toBeInTheDocument();
    expect(screen.getByAltText('security tooling icon')).toBeInTheDocument();
    expect(screen.getByAltText('security education icon')).toBeInTheDocument();
  });
});
