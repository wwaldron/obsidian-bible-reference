import { formatTagFromTemplate } from './formatTagFromTemplate'
import { VerseReference } from './splitBibleReference'

describe('formatTagFromTemplate', () => {
  it('should format book tag template', () => {
    const verseRef: VerseReference = {
      bookName: 'John',
      chapterNumber: 3,
      verseNumber: 16,
    }
    expect(formatTagFromTemplate('{book}', verseRef)).toBe('John')
  })

  it('should format chapter tag template', () => {
    const verseRef: VerseReference = {
      bookName: 'John',
      chapterNumber: 3,
      verseNumber: 16,
    }
    expect(formatTagFromTemplate('{book}{chapter}', verseRef)).toBe('John3')
  })

  it('should format hierarchical tag template', () => {
    const verseRef: VerseReference = {
      bookName: 'John',
      chapterNumber: 3,
      verseNumber: 16,
    }
    expect(formatTagFromTemplate('Bible/{book}/{chapter}', verseRef)).toBe(
      'Bible/John/3'
    )
  })

  it('should remove spaces from book names', () => {
    const verseRef: VerseReference = {
      bookName: '1 Corinthians',
      chapterNumber: 13,
      verseNumber: 1,
    }
    expect(formatTagFromTemplate('{book}', verseRef)).toBe('1Corinthians')
  })

  it('should handle verse number in template', () => {
    const verseRef: VerseReference = {
      bookName: 'John',
      chapterNumber: 3,
      verseNumber: 16,
    }
    expect(formatTagFromTemplate('{book}{chapter}:{verse}', verseRef)).toBe(
      'John3:16'
    )
  })

  it('should handle complex template', () => {
    const verseRef: VerseReference = {
      bookName: '2 Timothy',
      chapterNumber: 3,
      verseNumber: 16,
    }
    expect(
      formatTagFromTemplate('Bible/{book}/Chapter{chapter}', verseRef)
    ).toBe('Bible/2Timothy/Chapter3')
  })
})
