Coloca aqui os ficheiros finais de identidade visual da Zulmira Cakes.

Nomes recomendados:

- `logo-full.svg` para a versao completa, com simbolo e nome.
- `logo-symbol.svg` para a versao compacta, apenas com o simbolo.
- `public/favicon.svg` para o icone do navegador, se for diferente do simbolo.

Depois de adicionares os SVGs definitivos, actualiza os caminhos em:

```js
// src/config/brand.js
brandIdentity.assets.full;
brandIdentity.assets.compact;
```

Os componentes do site preservam as proporcoes do SVG e nao adicionam circulos,
fundos ou molduras ao logotipo.
