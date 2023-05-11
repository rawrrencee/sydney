# Sydney Companion App
[![Netlify Status](https://api.netlify.com/api/v1/badges/7c37b2ca-3e2d-4bdd-ae82-89d489c0a9e5/deploy-status)](https://app.netlify.com/sites/lawrencelim/deploys)

https://github.com/rawrrencee/sydney/assets/43084055/b83d4521-e7a8-423a-98a9-10e2fb4fd6fe

<p float="left">
   <img width="204" alt="image" src="https://user-images.githubusercontent.com/43084055/230781066-3f52a39f-edd7-492e-a0b6-c4491fa27f29.png">
   <img width="203" alt="image" src="https://user-images.githubusercontent.com/43084055/230781620-1e113dad-96c6-4f9a-90c9-80d29739fb2b.png">
</p>
<p float="left">
   <img width="200" alt="image" src="https://user-images.githubusercontent.com/43084055/230781113-c5a1bb4f-cbf3-446b-af59-3ecd0eb6af24.png">
   <img width="200" alt="image" src="https://user-images.githubusercontent.com/43084055/230781123-0b9f6d53-81e0-4722-a8fa-dcecde467c82.png">
   <img width="200" alt="image" src="https://user-images.githubusercontent.com/43084055/230781143-98d4c294-9135-45b3-957d-96608fdef8d3.png">
</p>

## Technologies used:
* Vuejs + Vite
* Tailwind CSS
* Headless UI
* Ant Design (Image preview component)
* @vueuse/motion

This web application was a way for me to get acquainted with Vuejs and Tailwind before I move on to building bigger projects. Several experimentations were done with transitions, colour choices, layouts while still maintaining a (hopefully) consistent user experience.

---
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
