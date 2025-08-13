import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom/vitest'
import Contact from '../components/Contact'

describe('Contact', () => {
  it('displays contact information', () => {
    render(<Contact />)
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument()
    expect(screen.getByText(/info@swastikindiacompany.com/i)).toBeInTheDocument()
    expect(screen.getByText(/123 Industrial Estate/i)).toBeInTheDocument()
  })
})
