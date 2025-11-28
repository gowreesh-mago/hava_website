#!/usr/bin/env node

/**
 * parse-bib.js
 *
 * Parses a BibTeX file and converts it to scholar-papers.json format
 *
 * Usage:
 *   node parse-bib.js [path/to/bibliography.bib]
 */

const fs = require('fs');
const path = require('path');

const DEFAULT_BIB_FILE = path.join(__dirname, 'bibliography.bib');
const DATA_DIR = path.join(__dirname, 'data');
const SCHOLAR_FILE = path.join(DATA_DIR, 'scholar-papers.json');

/**
 * Parse a BibTeX entry and extract fields
 */
function parseBibEntry(entryText) {
  // Extract entry type and key
  const typeMatch = entryText.match(/@(\w+)\s*\{\s*([^,]+)/);
  if (!typeMatch) return null;

  const [, type, key] = typeMatch;
  const entry = {
    id: key.trim(),
    type: type.toLowerCase()
  };

  // Extract all fields (handles multi-line values)
  const fieldRegex = /(\w+)\s*=\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g;
  let match;

  while ((match = fieldRegex.exec(entryText)) !== null) {
    const [, fieldName, fieldValue] = match;
    const cleanValue = fieldValue
      .replace(/\s+/g, ' ')
      .replace(/[{}]/g, '')
      .trim();
    entry[fieldName.toLowerCase()] = cleanValue;
  }

  // Also try to match quoted values
  const quotedFieldRegex = /(\w+)\s*=\s*"([^"]+)"/g;
  while ((match = quotedFieldRegex.exec(entryText)) !== null) {
    const [, fieldName, fieldValue] = match;
    if (!entry[fieldName.toLowerCase()]) {
      entry[fieldName.toLowerCase()] = fieldValue.trim();
    }
  }

  return entry;
}

/**
 * Parse entire BibTeX file
 */
function parseBibFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`Error: BibTeX file not found: ${filePath}`);
    return [];
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // Split by entry type pattern
  const entries = [];
  const entryPattern = /@\w+\s*\{[^@]*(?=@|$)/g;
  let match;

  const matches = content.match(entryPattern) || [];
  for (const entryText of matches) {
    const parsed = parseBibEntry(entryText);
    if (parsed) {
      entries.push(parsed);
    }
  }

  return entries;
}

/**
 * Parse authors string into array (handles various formats)
 */
function parseAuthors(authorString) {
  if (!authorString) return [];

  // Split by " and " or commas
  const authors = authorString
    .split(/\s+and\s+|,/)
    .map(a => a.trim())
    .filter(a => a.length > 0);

  return authors;
}

/**
 * Convert BibTeX entries to scholar-papers format
 */
function convertToScholarFormat(bibEntries) {
  const papers = bibEntries
    .map(entry => {
      const authors = entry.author ? parseAuthors(entry.author) : [];

      return {
        id: entry.id,
        title: entry.title || '',
        authors: authors,
        year: entry.year ? parseInt(entry.year, 10) : 0,
        venue: entry.booktitle || entry.journal || entry.venue || '',
        doi: entry.doi || '',
        arxiv: entry.arxiv || entry.eprint || '',
        url: entry.url || ''
      };
    })
    .filter(paper => paper.title) // Remove entries without title
    .sort((a, b) => {
      // Sort by year descending, then by title
      if (b.year !== a.year) {
        return b.year - a.year;
      }
      return a.title.localeCompare(b.title);
    });

  return papers;
}

/**
 * Main function
 */
function main() {
  const bibFile = process.argv[2] || DEFAULT_BIB_FILE;

  console.log(`📚 Parsing BibTeX file: ${bibFile}\n`);

  const bibEntries = parseBibFile(bibFile);
  console.log(`✓ Found ${bibEntries.length} entries in BibTeX file`);

  const papers = convertToScholarFormat(bibEntries);
  console.log(`✓ Converted ${papers.length} papers to JSON format`);

  // Create data directory if it doesn't exist
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const output = {
    lastUpdated: new Date().toISOString(),
    papers: papers
  };

  fs.writeFileSync(SCHOLAR_FILE, JSON.stringify(output, null, 2));
  console.log(`\n✅ Saved ${papers.length} papers to data/scholar-papers.json\n`);

  // Print summary
  if (papers.length > 0) {
    console.log('Sample papers:');
    papers.slice(0, 3).forEach(paper => {
      console.log(`  - "${paper.title}" (${paper.year})`);
      console.log(`    Authors: ${paper.authors.join(', ')}`);
    });
    if (papers.length > 3) {
      console.log(`  ... and ${papers.length - 3} more`);
    }
  }
}

if (require.main === module) {
  main();
}

module.exports = { parseBibFile, convertToScholarFormat };
