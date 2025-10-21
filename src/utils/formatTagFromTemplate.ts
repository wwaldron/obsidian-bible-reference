import { VerseReference } from './splitBibleReference'

/**
 * Format a tag from a template string
 * Supported variables:
 * - {book}: Book name with spaces removed
 * - {chapter}: Chapter number
 * - {verse}: Verse number (if provided)
 *
 * Example template: "Bible/{book}/{chapter}" -> "Bible/John/3"
 */
export function formatTagFromTemplate(
  template: string,
  verseReference: VerseReference
): string {
  const bookName = verseReference.bookName.replace(/ /g, '')
  const chapter = verseReference.chapterNumber.toString()
  const verse = verseReference.verseNumber?.toString() || ''

  return template
    .replace(/{book}/g, bookName)
    .replace(/{chapter}/g, chapter)
    .replace(/{verse}/g, verse)
}
