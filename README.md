# Terminal Cheat Sheet

## What is this?

For the novice and intermediate users of terminals on Linux, MacOS, and other operating systems, finding, understanding, learning, remembering common commands is an essential skill. There are a variety of one-off websites, GitHub gists, marketing pages, etc. that have these commands, but few provide the type of user-centered design that makes learning even easier.

## Tech stack

* [Jekyll](https://jekyllrb.com/) - static site builder that works with GitHub pages
* [AMP](https://amp.dev/documentation/components/) - used to enforce speed, simplicity, and SEO

**Libraries**

* [PureCSS](https://purecss.io/) - used for basic components and grid
* [Workbox](https://developers.google.com/web/tools/workbox) - used for offline support/PWA functionality
* [Termynal](https://github.com/ines/termynal) - modified a bit to work with `<amp-script>`

## Running locally

Checkout the code from GitHub and then run `jekyll serve` in the repo directory.

Since this is AMP code, make sure you [validate locally](https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validate_amp/#browser-developer-console) before merging.

## Internationalization (i18)

### How it works

The website supports internationalization (i18n) without the use of additional Jekyll plugins. There are many parts of the site that use this work, but the main parts for new pages are in the following structure:

```
├── _data
│   ├── translations.yml
│   └── commands
│       ├── basic.yml
│       ├── files.yml
│       └── <newcommands.yml>
│
├── _includes
│   └── i18n
│       ├── index.html
│       └── <newpage.html>
│
├── assets
│   └── pagetype
│       ├── randomasset-en.png
│       ├── randomasset-es.png
│       ├── randomasset-<newlang>.png
│       ├── <newasset>-en.mp4
│       ├── <newasset>-es.mp4
│       └── <newasset>-<newlang>.mp4
│
├── i18n
│   ├── es
│   │   ├── index.html
│   │   ├── otherpage.md
│   │   └── <newpage.html>
│   │
│   ├── fr
│   │   ├── index.html
│   │   ├── otherpage.md
│   │   └── <newpage.html>
│   │
│   └── <newlang>
│       ├── index.html
│       ├── otherpage.md
│       └── <newpage.html>
│
├── index.html
├── otherpage.md
├── <newpage.html>
...
```

#### For pages written in HTML using data

`_includes/i18n/*` contains the actual content of each page. This content is internationalized by combining translations from `_data/translations.yml` and `_data/commands/*.yml` with the `page.lang` variable.

`i18n/*` contains the pages for each language. These only contain some [front matter](https://jekyllrb.com/docs/front-matter/) and the include for the actual content from `_includes/i18n/*`. Most importantly, the `page.lang` variable is set at the top. If the language uses a [RTL script](https://en.wikipedia.org/wiki/Right-to-left), make sure you set `page.direction` to `rtl` as well to automatically reflow the correct parts of the site. 

The default language of the site is English, so the files outside of the `i18n` directory have the language set to English in `page.lang`. They also include the actual content from `_includes/i18n/*`.

#### For pages written in markdown without data

`i18n/*` contains the pages for each language. These contain some [front matter](https://jekyllrb.com/docs/front-matter/) and the fully translated page written in markdown. The `page.lang` variable is set at the top. If the language uses a [RTL script](https://en.wikipedia.org/wiki/Right-to-left), make sure you set `page.direction` to `rtl` as well to automatically reflow the correct parts of the site. 

The default language of the site is English, so the files outside of the `i18n` directory have the language set to English in `page.lang` and the content written in markdown as English.

### How to add new content

**You should not add new content without appropriate translations!**

#### Add a new page with translations as data

In the structure above, you'll need to add:

* Any translations you need to the data files
* An English page in the top directory
* A page for each language in the appropriate folder within `i18n`
* The actual content page under `_includes/i18n`
* Front matter set correctly in each page
* Internationalized assets in the `assets` directory

#### Add a new page in markdown

In the structure above, you'll need to add:

* An English markdown page in the top directory
* A markdown page for each language in the appropriate folder within `i18n`
* Front matter set correctly in each page
* Internationalized assets in the `assets` directory

#### Specifics for adding guides

Make sure you:

* Add the guide to the `_data/guides/guide-index.yml` file so that the navbar auto-generates correctly.
* TBD
