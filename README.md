# CINEFLIX

Plataforma de descoberta de filmes desenvolvida com React, Vite, JavaScript, CSS e a [OMDb API](https://www.omdbapi.com/).

## Instalação

```bash
npm install
```

Crie um `.env` usando `.env.example` como modelo e inclua sua chave:

```env
VITE_OMDB_API_KEY=sua_chave_da_omdb
```

## Executar

```bash
npm run dev
```

## Validar produção

```bash
npm run build
```

## Funcionalidades

- Início com destaque, apresentação, busca e recomendações.
- Catálogo com dados reais da OMDb e filtros por gênero.
- Busca por título, paginação e estados de erro/carregamento.
- Ficha completa acessada pelo IMDb ID.
- Rotas: `/`, `/filmes` e `/filme/:imdbID`.

> O arquivo `.env` está no `.gitignore`, portanto a chave não é versionada.
