# HAVA-Lab website

Static site for the Human-Aligned Video AI Laboratory, built with [Hugo](https://gohugo.io/) and deployed to GitHub Pages on every push to `main`.

## Editing content

Everything that changes regularly lives in a plain data file or a Markdown file. No template edits needed.

| What | Edit this file | Notes |
| --- | --- | --- |
| People, photos, affiliations | `data/team.yml` | Drives the Team page and the "Supervised by" credits. PhD `supervisors` must match PI names exactly. Original affiliation images are defined at the top. |
| The seven projects | `data/projects.yml` | Home theme cells (alignment above applications). `lead` must match a PhD in `data/team.yml`. |
| Project descriptions | `content/projects/_index.md` | Plain Markdown. Credits come from `{{< project-credit "id" >}}`. |
| Talks, events, posters, press, spotlights | `data/outreach.yml` | One stream on the Outreach page; Home shows the latest few. `vimeo` embeds a video. |
| Papers | `bibliography.bib` (the only file to edit) | Add, edit or delete an entry here. Grouped by year on Publications. Add `pdf = {...}` so the title links straight to the PDF, and `projects = {skill-assessment, ...}` (ids from `data/projects.yml`) to list it under those projects on Home. |
| Lab photo carousel (Outreach) | `data/gallery.yml` | Photos from `assets/images/lab/`. |
| Home headline and introduction | `content/_index.md` | |
| Menu, location, items on Home | `config.toml` | `outreachOnHome`. |

### Adding an outreach item

```yaml
- title: "Talk title"
  date: "2026-10-08"
  type: "Talk"
  outlet: "Host organisation"
  location: "University Library, Amsterdam"
  summary: "Presenter and a short description of the talk."
  link: "https://example.org/event"
  linkLabel: "Programme"
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

## Design and curation rules

`requirements.txt` takes priority for layout and content; `design.md` supplies
colour, typography and motion. The original weave is an explicit user-approved
exception: preserve its appearance and animation. Team groups are PhDs, co-PIs,
then leadership; `sortName` orders each group by surname, following the VIS Lab
reference. The later user instruction replaces affiliation circles with original logo images, preserving their proportions and colours.

Outreach uses Europe/Amsterdam calendar dates. Today's events remain in
“Today & upcoming”; earlier dates appear in “Previous”. The daily deployment
refreshes these sections. Undated service records have no invented appointment
date. LAB42 entries must have `series: "AI at Sciencepark"` and
`havaCoCreated: true`, verified against their Luma event description. This is a
curated list, not an automatic import of the LAB42 calendar. `presenters` is a list;
`imageCredit` attributes event artwork.

Run the generated-site audit after building:

```sh
hugo --panicOnWarning --destination /tmp/hava-audit
python3 scripts/audit-built-site.py /tmp/hava-audit /hava_website
```

Use `/` instead of `/hava_website` when building with a root-domain base URL.
