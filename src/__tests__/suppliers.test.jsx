import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom/vitest'
import Suppliers from '../components/Suppliers'

describe('Suppliers', () => {
  it('lists supplier names', () => {
    render(<Suppliers />)
    expect(screen.getByText(/Our Suppliers/i)).toBeInTheDocument()
    expect(screen.getByText('Acme Corp')).toBeInTheDocument()
  })
})
