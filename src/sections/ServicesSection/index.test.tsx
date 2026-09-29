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

    expect(screen.getByText(/Réparation et sécurisation de PC/i)).toBeInTheDocument();
    expect(screen.getByText(/Sites web pour indépendants/i)).toBeInTheDocument();
    expect(screen.getByText(/Données et continuité/i)).toBeInTheDocument();
  });

  it('renders service descriptions', () => {
    render(<ServicesSection />);

    expect(screen.getByText(/Diagnostic, dépannage, nettoyage/i)).toBeInTheDocument();
    expect(screen.getByText(/Vitrines et pages uniques/i)).toBeInTheDocument();
    expect(screen.getByText(/Classement, sauvegardes testées/i)).toBeInTheDocument();
  });
});
