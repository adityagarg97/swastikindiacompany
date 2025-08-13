import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom/vitest'
import Hero from '../components/Hero'

describe('Hero', () => {
  it('renders company tagline', () => {
    render(<Hero />)
    expect(
      screen.getByText(/Quality chemicals for a brighter future/i)
    ).toBeInTheDocument()
  })
})
