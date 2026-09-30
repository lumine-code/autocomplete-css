# autocomplete-css

CSS property name and value autocompletions.

> [!WARNING]
> **This package is deprecated.** CSS, SCSS and Less completion is now provided by [ide-css](https://github.com/lumine-code/ide-css), and indented Sass completion by [ide-sass](https://github.com/lumine-code/ide-sass), through [ide-client](https://github.com/lumine-code/ide-client) and [autocomplete](https://github.com/lumine-code/autocomplete). This repository is archived and no longer maintained.

## Features

- **Property completions**: suggests CSS property names as you type.
- **Value completions**: suggests valid values for the current property.
- **Pseudo-selector completions**: suggests pseudo-selectors and pseudo-elements.
- **Language support**: works in CSS, Sass, SCSS, and PostCSS source.

## Migration

Disable or uninstall `autocomplete-css` and install `ide-client` with the adapter for your stylesheet syntax. Keep `autocomplete` installed to display completion suggestions.

```sh
lumine --install lumine-code/ide-client
lumine --install lumine-code/ide-css
lumine --install lumine-code/autocomplete
```

For indented `.sass` files, install `ide-sass` instead of, or alongside, `ide-css`.

```sh
lumine --install lumine-code/ide-sass
```

## Services

- `autocomplete.provider`: provided to supply CSS property and value suggestions to autocomplete.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub. Any feedback is welcome!
