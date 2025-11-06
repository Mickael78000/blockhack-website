import { describe, it, expect } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('exports App component', () => {
    expect(App).toBeDefined();
    expect(typeof App).toBe('function');
  });
});
