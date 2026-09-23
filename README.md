# HAVA-Lab website

Static site for the Human-Aligned Video AI Laboratory, built with [Hugo](https://gohugo.io/) and deployed to GitHub Pages on every push to `main`.

## Editing content

Everything that changes regularly lives in a plain data file or a Markdown file. No template edits needed.

| What | Edit this file | Notes |
| --- | --- | --- |
| Meetups, talks, sessions | `data/events.yml` | One entry per event. The home page shows upcoming events; Publications & News also lists past events. |
| Papers | `bibliography.bib` | Standard BibTeX. Optional `url`, `doi`, `arxiv`, `pdf` fields become link buttons. |
| People and photos | `data/team.yml` | Drives the Team page. Photos go in `static/images/`. |
| Media & visibility | `data/media.yml` | Press, talks, videos, events. Optional `image` thumbnail. |
| Lab photo carousel | `data/gallery.yml` | Photos from `assets/images/lab/`, with captions, alt text and optional credits. Shown on Home and Media; Hugo creates responsive WebP images. |
| Blog posts | `content/blog/*.md` | Copy `content/blog/example-post.md`, remove `draft: true`. |
| News articles | `content/news/*.md` | Same format as blog posts. Listed under Publications & News and on the home page. |
| Home page headline and introduction | `content/_index.md` | Followed by the photo carousel, upcoming events and the three latest news items or DSC spotlights. |
| Mission text and objective cards | `content/mission/_index.md` | Cards in the front matter link to the detailed research sections below. |
| Nav, contact email, upcoming event limit | `config.toml` | `eventsOnHome` controls the maximum number shown on the home page. |

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
