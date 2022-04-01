# Pokedex

Objetivo do projeto é conhecer a ferramenta e realizar o desafio proposto pela empresa Take 5 para vaga de Desenvolvedor Front-end Pleno

## Instalando dependências.
```bash
npm install --save --legacy-peer-deps
use a flag legacy-peer-deps para evitar conflitos de versão

versões usada no projeto:
node: v16.14.2
npm: 8.6.0
Quasar vite 2
Vuejs 3
```

### Para iniciar o projeto local
```bash
npm run dev
or quasar dev
```

### Infomações do projeto em produção
```bash
Plataforma de hospedagem: Netlify
Modelo de build: SPA
Link: https://62475f76df3528102eacb8d9--scintillating-macaron-d2c6f1.netlify.app/
```

### Páginas que Compõem o projeto
```bash
 - Home: breve apresentação do projeto - "/"
 - Listagem: listagem dos pokémons - "/todos-os-pokemons"
 - Detalhe: informações de altura e peso do pokémon, a página se basea no id no parametro da url - ex: "/pokemon/1"
```

### Features no projeto
```bash
 - Skeleton: todas as páginas que envolve requisições na api foi implementado uma skeleton para melhor experiência do usuário.
     - Listagem
     - Detalhe do pokémon
     
 - Listagem:
     - Paginação
     - Filtro por tipo de pokémon
     - Filtro por nome do pokémon
     - Quantidade de pokemons por página
 
 - Theme Dark Mode
 
 - Alternador de linguagem da página pt-BR e en-US
```

### Performance do projeto
Esse projeto foi desenvolvido em mobile first para garantir uma boa metrica de CLS. 
Em alguns testes algumas metricas como TBT e FCP podem ser prejudicas por instabilidade do servidor no momento do teste, as prints abaixo esta com base em uma media
desses testes.
A métrica LCP é o maior problema desse projeto, mas a principal causa esta sendo o tamanho da imagem, pois ela vem da api bem maior do que esta sendo utilizado
na página.

Link da ferramenta utilizada: https://pagespeed.web.dev/
```bash
 Home:
https://prnt.sc/dKOcmeJe0yqD
 
 Listagem:
https://prnt.sc/qT4sVuwQsWid

 Detalhe Pokémon:
![image](https://user-images.githubusercontent.com/62650643/161347965-244cc362-a435-41bc-846d-9d3320ff20c1.png)

```
