// Test for tagging logic - whitespace-separated templates
describe('VerseSuggesting - Tag Template Parsing', () => {
  it('should parse single template', () => {
    const template = '{book}'
    const templates = template.split(/\s+/)
    expect(templates).toEqual(['{book}'])
  })

  it('should parse multiple whitespace-separated templates', () => {
    const template = '{book} {book}{chapter}'
    const templates = template.split(/\s+/)
    expect(templates).toEqual(['{book}', '{book}{chapter}'])
  })

  it('should handle multiple spaces between templates', () => {
    const template = '{book}   {book}{chapter}'
    const templates = template.split(/\s+/).filter((t) => t)
    expect(templates).toEqual(['{book}', '{book}{chapter}'])
  })

  it('should parse three or more templates', () => {
    const template = '{book} {book}{chapter} {book}{chapter}:{verse}'
    const templates = template.split(/\s+/)
    expect(templates).toEqual([
      '{book}',
      '{book}{chapter}',
      '{book}{chapter}:{verse}',
    ])
  })

  it('should handle tabs and mixed whitespace', () => {
    const template = '{book}\t{book}{chapter} \t {book}{chapter}:{verse}'
    const templates = template.split(/\s+/).filter((t) => t)
    expect(templates).toEqual([
      '{book}',
      '{book}{chapter}',
      '{book}{chapter}:{verse}',
    ])
  })
})
