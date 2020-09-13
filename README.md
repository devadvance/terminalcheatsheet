# Terminal Cheat Sheet

## What is this?

For the novice and intermediate users of terminals on Linux, macOS, and other operating systems, finding, understanding, learning, remembering common commands is an essential skill. There are a variety of one-off websites, GitHub gists, marketing pages, etc. that have these commands, but few provide the type of user-centered design that makes learning even easier.

Terminal Cheat Sheet aims to balance approachability through straightforward content, reduced friction by localizing, accessibility through best practices like WCAG, and performance through the use of static content. It's also meant to complement, not replace, options like [man pages](https://en.wikipedia.org/wiki/Man_page) or detailed user guides.

## Tech stack

* [Jekyll](https://jekyllrb.com/) - static site builder that works with GitHub pages
* [AMP](https://amp.dev/documentation/components/) - used to enforce speed, simplicity, and SEO

**Libraries**

* [PureCSS](https://purecss.io/) - used for basic components and grid
* [Workbox](https://developers.google.com/web/tools/workbox) - used for offline support/PWA functionality
* [Termynal](https://github.com/ines/termynal) - modified a bit to work with `<amp-script>`

**Infra**

* GitHub for source and deployment
* GitHub Pages for hosting the content
* Cloudflare for CDN

## Running locally

You'll need to set up Jekyll for local development. Visit https://jekyllrb.com/docs/installation/ for instructions.

Checkout the code from GitHub and then run `jekyll serve` in the repo directory.

Since this is AMP code, make sure you [validate locally](https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validate_amp/#browser-developer-console) before merging.

## Internationalization/localization (i18n/l10n)

### How it works

The website is internationalized to support localization through translations, asset variations, and more. This is done without the use of additional Jekyll plugins. There are many parts of the site that use this work, but the main parts for new pages are in the following structure:

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

`_includes/i18n/*` contains the actual content of each page. This content is localized by combining translations from `_data/translations.yml` and `_data/commands/*.yml` with the `page.lang` variable.

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
* Localized assets in the `assets` directory

#### Add a new page in markdown

In the structure above, you'll need to add:

* An English markdown page in the top directory
* A markdown page for each language in the appropriate folder within `i18n`
* Front matter set correctly in each page
* Localized assets in the `assets` directory. For screenshots/GIFs of terminal interaction, it may be OK to use the English locale for most cases

#### Specifics for adding guides

Make sure you:

* Add the guide to the `_data/guides/guide-index.yml` file so that the navbar auto-generates correctly.
* Try to be consistent with other guides by adding sections like "Introduction", "Prerequisites", and a table of contents

## Tips for creating example assets (images, GIFs)

### Use the demo environment

Using Docker, we can keep the demo environment consistent across collaborators. 

To create a new image:

```
docker build -t testimage:v1 --no-cache .
```

To run and attach to the container:

```
docker run -it -p 8000:8000 testimage:v1 bash
```

Another small nit: keeping the dates consistent on files and folders helps to create consistency across the guides. To do this, you can update the modified date to 2020-01-01. Within the `demo_env` folder, you can do this:

```
touch -mt 202001010000 *
```

### Keeping assets consistent on macOS

A few tips to keep the screenshots and GIFs consistent:

* Use a tool like BetterTouchTool to create a reuseable window size snapping area. A lot of the assets are 665x387 right now, so this helps to be consistent with that
* When taking screenshots with the built-in macOS tool, use `CMD + Shift + 4`, then press `space` to make it a window screenshot, and then hold `Alt` when clicking to avoid capturing the window shadow effect

## Known issues

* The 404 page defaults to English no matter what context you came from
* It's sometimes hard to highlight LTR code mixed with RTL prose
* The use of i18n versus l10n needs some cleanup

## Contributors

* [devadvance](https://github.com/devadvance)
* [dontcallmebigguy](https://github.com/dontcallmebigguy)

## License

SPDX-License-Identifier: Apache-2.0

Visit [LICENSE](LICENSE) for full text.
