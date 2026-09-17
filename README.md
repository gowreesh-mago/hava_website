# HAVA-Lab website

Static site for the Human-Aligned Video AI Laboratory, built with [Hugo](https://gohugo.io/) and deployed to GitHub Pages on every push to `main`.

## Editing content

Everything that changes regularly lives in a plain data file or a Markdown file. No template edits needed.

| What | Edit this file | Notes |
| --- | --- | --- |
| Meetups, talks, sessions | `data/events.yml` | One entry per event. `link` is the invite / registration / recap URL. Upcoming events show first on the home page. |
| Papers | `bibliography.bib` | Standard BibTeX. Optional `url`, `doi`, `arxiv`, `pdf` fields become link buttons. |
| People and photos | `data/team.yml` | Drives the Team page and the photo roll on the home page. Photos go in `static/images/`. |
| Media & visibility | `data/media.yml` | Press, talks, videos, events. Optional `image` thumbnail. |
| Blog posts | `content/blog/*.md` | Copy `content/blog/example-post.md`, remove `draft: true`. |
| News articles | `content/news/*.md` | Same format as blog posts. Listed under Publications & News and on the home page. |
| Home page headline, ticker, objectives, stats | `content/_index.md` front matter | The body text below the front matter is the intro prose. |
| Mission text | `content/mission/_index.md` | Plain Markdown. |
| Nav, contact email, how many items the home page shows | `config.toml` | `pubsOnHome`, `eventsOnHome`. |

### Adding an event

```yaml
- title: "HAVA-Faculty-focus: ethical alignment"
  date: "2026-10-08"
  kind: "Faculty-focus"
  time: "16:00"
  location: "DSC, University Library Singel"
  speaker: "Dasha Simons · with Tobias Blanke"
  description: "One sentence on what the session covers."
  link: "https://forms.uva.nl/…"
  linkLabel: "Register"
```

### Adding a paper

Append a BibTeX entry to `bibliography.bib`:

```bibtex
@inproceedings{mago2026example,
  title     = {Paper title},
  author    = {Mago, Gowreesh and Mettes, Pascal},
  booktitle = {CVPR},
  year      = {2026},
  arxiv     = {2601.01234},
  pdf       = {https://example.org/paper.pdf}
}
```

The GitHub Actions workflow regenerates `data/scholar-papers.json` from the `.bib` before every build, so committing the `.bib` alone is enough. To preview locally, run `npm run build:scholar` first.

## Running locally

```bash
npm run dev        # regenerates papers JSON, then hugo server
hugo               # production build into public/
```

Requires Hugo extended ≥ 0.152 and Node ≥ 14.
