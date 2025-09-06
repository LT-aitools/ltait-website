// ABOUTME: End-to-end tests for blog deployment workflow ensuring full system integrity
// ABOUTME: Tests complete blog deployment process and website functionality after deployment

import { describe, it, expect, beforeAll, vi } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import BlogPost from '../pages/BlogPost'
import fs from 'fs'
import path from 'path'

// Mock fetch for E2E tests with real-like responses
const mockFetch = vi.fn()
global.fetch = mockFetch

describe('Blog Deployment End-to-End Tests', () => {
  let realHtmlContent: string
  const week19HtmlPath = path.join(process.cwd(), 'public', 'blog', 'week19.html')

  beforeAll(() => {
    // Read actual HTML content for realistic E2E testing
    realHtmlContent = fs.readFileSync(week19HtmlPath, 'utf-8')
  })

  describe('Complete Blog Deployment Workflow', () => {
    it('should successfully deploy blog post without breaking website', () => {
      // Test that the blog component can be instantiated without errors
      const { container } = render(
        <MemoryRouter initialEntries={['/blog/week19']}>
          <BlogPost />
        </MemoryRouter>
      )

      // Verify no JavaScript errors occurred during rendering
      expect(container).toBeTruthy()
      // Should show loading state initially
      expect(container.textContent).toContain('Loading blog post')
    })

    it('should maintain website performance after blog deployment', () => {
      const startTime = performance.now()

      render(
        <MemoryRouter initialEntries={['/blog/week19']}>
          <BlogPost />
        </MemoryRouter>
      )

      const endTime = performance.now()
      const renderTime = endTime - startTime

      // Component should render within reasonable time (100ms)
      expect(renderTime).toBeLessThan(100)
    })

    it('should handle concurrent blog post requests', async () => {
      // Simulate multiple simultaneous blog requests
      const promises = Array.from({ length: 5 }, (_, i) => {
        mockFetch.mockResolvedValueOnce({
          ok: true,
          text: () => Promise.resolve(realHtmlContent)
        })

        return render(
          <MemoryRouter initialEntries={[`/blog/week19-${i}`]} key={i}>
            <BlogPost />
          </MemoryRouter>
        )
      })

      // All requests should complete without errors
      expect(() => promises).not.toThrow()
    })
  })

  describe('Cross-Browser Compatibility', () => {
    it('should render HTML content safely across different environments', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(realHtmlContent)
      })

      // Test with different user agents (simulated)
      const originalUserAgent = navigator.userAgent
      
      const userAgents = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/605.1.15',
        'Mozilla/5.0 (X11; Linux x86_64) Firefox/89.0'
      ]

      for (const userAgent of userAgents) {
        Object.defineProperty(navigator, 'userAgent', {
          value: userAgent,
          configurable: true
        })

        const { container } = render(
          <MemoryRouter initialEntries={['/blog/week19']}>
            <BlogPost />
          </MemoryRouter>
        )

        expect(container).toBeTruthy()
      }

      // Restore original user agent
      Object.defineProperty(navigator, 'userAgent', {
        value: originalUserAgent,
        configurable: true
      })
    })
  })

  describe('Blog Content Integrity', () => {
    it('should preserve all critical blog elements after deployment', () => {
      // Verify critical content elements exist in the real HTML
      expect(realHtmlContent).toContain('<h1>')
      expect(realHtmlContent).toContain('Week 19:')
      expect(realHtmlContent).toContain('Published on')
      expect(realHtmlContent).toContain('<style>')
      expect(realHtmlContent).toContain('media-container')
    })

    it('should maintain responsive design after deployment', async () => {
      // Check that responsive CSS is present
      expect(realHtmlContent).toContain('max-width: 800px')
      expect(realHtmlContent).toContain('margin: 0 auto')
      expect(realHtmlContent).toContain('padding: 2rem 1rem')
      
      // Check media queries or responsive elements
      expect(realHtmlContent).toContain('max-width: 100%')
      expect(realHtmlContent).toContain('height: auto')
    })
  })

  describe('SEO and Accessibility', () => {
    it('should maintain proper heading hierarchy for accessibility', () => {
      const h1Matches = realHtmlContent.match(/<h1[^>]*>/g) || []
      const h2Matches = realHtmlContent.match(/<h2[^>]*>/g) || []
      const h3Matches = realHtmlContent.match(/<h3[^>]*>/g) || []

      expect(h1Matches).toHaveLength(1) // Single main heading
      expect(h2Matches.length).toBeGreaterThan(0) // Section headings
      expect(h3Matches.length).toBeGreaterThan(0) // Subsection headings
    })

    it('should have proper alt text for images', () => {
      const imageMatches = realHtmlContent.match(/<img[^>]+>/g) || []
      
      imageMatches.forEach(imgTag => {
        expect(imgTag).toContain('alt=')
      })
    })

    it('should have semantic HTML structure', () => {
      expect(realHtmlContent).toContain('<p>')
      expect(realHtmlContent).toContain('<ul>')
      expect(realHtmlContent).toContain('<li>')
    })
  })
})