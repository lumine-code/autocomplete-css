let provider;

function getProvider() {
  if (!provider) provider = require("./provider.js");
  return provider;
}

const lazyProvider = new Proxy(
  {
    scopeSelector: ".source.css, .source.sass, .source.css.postcss",
    disableForScopeSelector:
      ".source.css .comment, .source.css .string, .source.sass .comment, .source.sass .string, .source.css.postcss .comment, source.css.postcss .string",
    filterSuggestions: true,
  },
  {
    get(target, name) {
      if (Reflect.has(target, name)) return target[name];
      const value = getProvider()[name];
      return typeof value === "function" ? value.bind(getProvider()) : value;
    },
  },
);

module.exports = {
  activate() {},

  provideAutocomplete() {
    return lazyProvider;
  },
};
