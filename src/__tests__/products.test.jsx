import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom/vitest'
import Products from '../components/Products'

describe('Products', () => {
  it('shows product list', () => {
    render(<Products />)
    expect(screen.getByText(/Products/i)).toBeInTheDocument()
    expect(screen.getByText('Industrial Chemicals')).toBeInTheDocument()
  })
})
