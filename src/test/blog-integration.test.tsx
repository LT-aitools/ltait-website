// ABOUTME: Integration tests for blog deployment ensuring media files and HTML structure work correctly
// ABOUTME: Tests actual blog file existence, media loading, and cross-component interactions

import { describe, it, expect, beforeAll } from 'vitest'
import fs from 'fs'
import path from 'path'

describe('Blog Deployment Integration Tests', () => {
  const publicBlogPath = path.join(process.cwd(), 'public', 'blog')
  const week19HtmlPath = path.join(publicBlogPath, 'week19.html')
  const week22HtmlPath = path.join(publicBlogPath, 'week22.html')
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
      htmlContent = fs.readFileSync(week22HtmlPath, 'utf-8')
    })

    it('should contain proper HTML structure for standalone blog posts', () => {
      // Should contain DOCTYPE, html, head, or body tags (standalone HTML)
      expect(htmlContent).toMatch(/<!DOCTYPE/i)
      expect(htmlContent).toMatch(/<html[^>]*>/i)
      expect(htmlContent).toMatch(/<head(\s|>)/i)
      expect(htmlContent).toMatch(/<body[^>]*>/i)
    })

    it('should contain required blog post elements', () => {
      expect(htmlContent).toContain('<h1>')
      expect(htmlContent).toContain('Week 22:')
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
      expect(htmlContent).toContain('<link rel="stylesheet" href="blog-styles.css">')
      expect(htmlContent).toContain('Inter')
    })

    it('should have proper media container styling', () => {
      expect(htmlContent).toContain('class="media-container"')
    })

    it('should contain section separators', () => {
      expect(htmlContent).toContain('section-separator')
      expect(htmlContent).toContain('• • •')
    })
  })

  describe('Media File Validation', () => {
    it('should have Week 19 or Week 22 media files', () => {
      const mediaFiles = fs.readdirSync(mediaPath)
      const week19Files = mediaFiles.filter(file => file.startsWith('Week 19'))
      const week22Files = mediaFiles.filter(file => file.startsWith('Week 22'))
      
      expect(week19Files.length + week22Files.length).toBeGreaterThan(0)
    })

    it('should have both images and videos', () => {
      const mediaFiles = fs.readdirSync(mediaPath)
      const allImages = mediaFiles.filter(file => 
        (file.startsWith('Week 19') || file.startsWith('Week 22')) && (file.endsWith('.jpg') || file.endsWith('.png'))
      )
      const allVideos = mediaFiles.filter(file => 
        (file.startsWith('Week 19') || file.startsWith('Week 22')) && file.endsWith('.mp4')
      )

      expect(allImages.length).toBeGreaterThan(0)
      expect(allVideos.length).toBeGreaterThan(0)
    })

    it('should reference media files with correct paths in HTML', () => {
      // Focus on Week 22 (latest deployment)
      expect(fs.existsSync(week22HtmlPath)).toBe(true)
      
      const htmlContent = fs.readFileSync(week22HtmlPath, 'utf-8')
      const mediaPaths = htmlContent.match(/media\/[^"]+/g) || []
      
      expect(mediaPaths.length).toBeGreaterThan(0)
      
      // Verify referenced files actually exist
      mediaPaths.forEach(mediaPath => {
        const filePath = path.join(process.cwd(), 'public', 'blog', mediaPath)
        expect(fs.existsSync(filePath)).toBe(true)
      })
    })
  })

  describe('Content Quality Validation', () => {
    let htmlContent: string

    beforeAll(() => {
      htmlContent = fs.readFileSync(week22HtmlPath, 'utf-8')
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
      
      // Should have CSS for bullet visibility (now in external CSS file)
      expect(htmlContent).toContain('blog-styles.css')
    })

    it('should have grades properly formatted', () => {
      // Check for either H3 format or div format
      const h3GradeMatches = htmlContent.match(/<h3>Grade: [A-F][+-]?<\/h3>/g) || []
      const divGradeMatches = htmlContent.match(/<div class="grade"><strong>Grade: [A-F][+-]?<\/strong><\/div>/g) || []
      const strongGradeMatches = htmlContent.match(/<strong>Grade: [A-F][+-]?<\/strong>/g) || []
      
      const totalGrades = h3GradeMatches.length + divGradeMatches.length + strongGradeMatches.length
      expect(totalGrades).toBeGreaterThan(0)
    })

    it('should have publication date with proper styling', () => {
      expect(htmlContent).toContain('Published on')
      expect(htmlContent).toContain('class="publication-info"')
    })
  })
})