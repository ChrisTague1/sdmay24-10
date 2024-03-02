# AI Cancer UI

This is the frontend + backend for out senior design project; group `sdmay24-10`

## Deployment

> This process can likely be made simpiler. If I setup vercel to use ai-cancer-ui as a home folder, then we can just have two remotes normally and not have to do this weird stuff

- `cd` into _this directory_
    - `cd ai-cancer-ui`
- Initialize this directory to a git repository
    - `git init`
- Add [this repo](https://github.com/ChrisTague1/ai-cancer-ui) as a remote
    - `git remote add deploy git@github.com:ChrisTague1/ai-cancer-ui.git` (if you are using `ssh`)
- Make changes on the frontend, then run standard git commands:
    - `git checkout -b <some branch name>`
    - `git add .`
    - `git commit -m "<some useful message>"`
    - `git push deploy <some branch name>`
- For these changes to show up in our personal Gitlab, you need to `cd` **out** of this repo, and run the above commands again

Deployments happen automatically on pushes to main, via `vercel`

- [Vercel Dashboard](https://vercel.com/christague1/ai-cancer-ui)
- [Live Deployment](https://ai-cancer-ui.vercel.app/)

## Running

If you do not have `node` installed, [install it](https://nodejs.org/en)

```bash
# to see if you have node
node --version
```

To install dependencies:

```bash
npm ci
```

To test locally, run:

```bash
npm start
```

## Development

This project uses the following (these resources are enough to learn):
- [Svelte](https://svelte.dev/docs/introduction)
- [Sveltekit](https://kit.svelte.dev/docs/introduction)
- [TensorFlowJS](https://www.tensorflow.org/js)
- [TailwindCSS](https://tailwindcss.com/docs/utility-first)
