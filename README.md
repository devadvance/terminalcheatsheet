# terminalcheatsheet

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
├── i18n
│   ├── es
│   │   ├── index.html
│   │   └── <newpage.html>
│   │
│   ├── fr
│   │   ├── index.html
│   │   └── <newpage.html>
│   │
│   └── <newlang>
│       ├── index.html
│       └── <newpage.html>
│
├── index.html
├── <newpage.html>
...
```

`_includes/i18n/*` contains the actual content of each page. This content is internationalized by combining translations from `_data/translations.yml` and `_data/commands/*.yml` with the `page.lang` variable.

`i18n/*` contains the pages for each language. These only contain some [front matter](https://jekyllrb.com/docs/front-matter/) and the include for the actual content from `_includes/i18n/*`. Most importantly, the `page.lang` variable is set at the top.

The default language of the site is English, so the files outside of the `i18n` directory have the language set to English in `page.lang`. They also include the actual content from `_includes/i18n/*`.

### How to add a new page

**You should not add new content without appropriate translations!**

In the structure above, you'll need to add:

* Any translations you need to the data files
* An English page in the top directory
* A page for each language in the appropriate folder within `i18n`
* The actual content page under `_includes/i18n`