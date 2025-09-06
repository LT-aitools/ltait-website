// ABOUTME: Integration tests for blog deployment ensuring media files and HTML structure work correctly
// ABOUTME: Tests actual blog file existence, media loading, and cross-component interactions

import { describe, it, expect, beforeAll } from 'vitest'
import fs from 'fs'
import path from 'path'

describe('Blog Deployment Integration Tests', () => {
  const publicBlogPath = path.join(process.cwd(), 'public', 'blog')
  const week19HtmlPath = path.join(publicBlogPath, 'week19.html')
  const mediaPath = path.join(publicBlogPath, 'media')

  describe('File Structure Validation', () => {
    it('should have blog directory in public folder', () => {
      expect(fs.existsSync(publicBlogPath)).toBe(true)
    })

    it('should have week19.html file', () => {
      expect(fs.existsSync(week19HtmlPath)).toBe(true)
    })

    it('should have media directory', () => {
      expect(fs.existsSync(mediaPath)).toBe(true)
    })
  })

  describe('HTML Content Validation', () => {
    let htmlContent: string

    beforeAll(() => {
      htmlContent = fs.readFileSync(week19HtmlPath, 'utf-8')
    })

    it('should contain proper HTML structure for React compatibility', () => {
      // Should NOT contain DOCTYPE, html, head, or body tags (React compatibility)
      expect(htmlContent).not.toMatch(/<!DOCTYPE/i)
      expect(htmlContent).not.toMatch(/<html/i)
      expect(htmlContent).not.toMatch(/<head/i)
      expect(htmlContent).not.toMatch(/<body/i)
    })

    it('should contain required blog post elements', () => {
      expect(htmlContent).toContain('<h1>')
      expect(htmlContent).toContain('Week 19:')
      expect(htmlContent).toContain('Published on')
    })

    it('should have proper header hierarchy (H1 -> H2 -> H3)', () => {
      const h1Count = (htmlContent.match(/<h1>/g) || []).length
      const h2Count = (htmlContent.match(/<h2>/g) || []).length
      const h3Count = (htmlContent.match(/<h3>/g) || []).length

      expect(h1Count).toBe(1) // Only one main title
      expect(h2Count).toBeGreaterThan(0) // Project sections
      expect(h3Count).toBeGreaterThan(0) // Subsections
    })

    it('should contain CSS styling block', () => {
      expect(htmlContent).toContain('<style>')
      expect(htmlContent).toContain('font-family: system-ui')
      expect(htmlContent).toContain('list-style-type: disc !important')
    })

    it('should have proper media container styling', () => {
      expect(htmlContent).toContain('.media-container')
      expect(htmlContent).toContain('background: transparent')
    })

    it('should contain section separators', () => {
      expect(htmlContent).toContain('section-separator')
      expect(htmlContent).toContain('• • •')
    })
  })

  describe('Media File Validation', () => {
    it('should have Week 19 media files', () => {
      const mediaFiles = fs.readdirSync(mediaPath)
      const week19Files = mediaFiles.filter(file => file.startsWith('Week 19'))
      
      expect(week19Files.length).toBeGreaterThan(0)
    })

    it('should have both images and videos', () => {
      const mediaFiles = fs.readdirSync(mediaPath)
      const week19Images = mediaFiles.filter(file => 
        file.startsWith('Week 19') && (file.endsWith('.jpg') || file.endsWith('.png'))
      )
      const week19Videos = mediaFiles.filter(file => 
        file.startsWith('Week 19') && file.endsWith('.mp4')
      )

      expect(week19Images.length).toBeGreaterThan(0)
      expect(week19Videos.length).toBeGreaterThan(0)
    })

    it('should reference media files with correct paths in HTML', () => {
      const htmlContent = fs.readFileSync(week19HtmlPath, 'utf-8')
      const mediaPaths = htmlContent.match(/\/blog\/media\/[^"]+/g) || []
      
      expect(mediaPaths.length).toBeGreaterThan(0)
      
      // Verify referenced files actually exist
      mediaPaths.forEach(mediaPath => {
        const filePath = path.join(process.cwd(), 'public', mediaPath)
        expect(fs.existsSync(filePath)).toBe(true)
      })
    })
  })

  describe('Content Quality Validation', () => {
    let htmlContent: string

    beforeAll(() => {
      htmlContent = fs.readFileSync(week19HtmlPath, 'utf-8')
    })

    it('should not contain stray HTML syntax', () => {
      // Check for broken HTML (not properly closed tags)
      expect(htmlContent).not.toMatch(/ h2>/)  // Space before h2> indicates broken HTML
      expect(htmlContent).not.toContain('\\n\\n')  // Literal \n strings
      expect(htmlContent).not.toContain('\\]')   // Literal backslash-bracket
    })

    it('should have properly formatted bullet points', () => {
      // Should contain actual <ul> and <li> tags
      expect(htmlContent).toContain('<ul>')
      expect(htmlContent).toContain('<li>')
      
      // Should have CSS for bullet visibility
      expect(htmlContent).toContain('list-style-type: disc !important')
    })

    it('should have grades as H3 headers', () => {
      const gradeMatches = htmlContent.match(/<h3>Grade: [A-F][+-]?<\/h3>/g) || []
      expect(gradeMatches.length).toBeGreaterThan(0)
    })

    it('should have publication date with proper styling', () => {
      expect(htmlContent).toContain('Published on')
      expect(htmlContent).toContain('font-style: italic')
    })
  })
})