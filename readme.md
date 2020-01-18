![parcel3-typescript-spine](https://user-images.githubusercontent.com/2236153/72027279-9e637980-323b-11ea-984e-7da548af5a83.png)

# Phaser 3 + TypeScript + Spine
> Example project for Spine animations in Phaser 3 with TypeScript plus SpinePlugin typing files! 🌟

![License](https://img.shields.io/badge/license-MIT-green)

## In-depth Guide

[You can find a guide explaining this project here.](https://blog.ourcade.co/posts/2020/phaser-3-parcel-typescript-spine/)

## Demo

https://ourcade.github.io/phaser3-typescript-spine/

## Prerequisites

This example project uses the [phaser3-parcel-template](https://github.com/ourcade/phaser3-parcel-template) and requires [Parcel](https://parceljs.org/).

## Getting Started

Clone this repository to your local machine (or download from Github or use a tool like [Degit](https://github.com/Rich-Harris/degit)):

```bash
git clone https://github.com/ourcade/phaser3-typescript-spine.git my-project-folder
```

Go into your project folder and install dependencies:

```bash
cd my-project-folder
npm install
```

Start development server:

```bash
npm run start
```

You'll see Spine Boy in his idle animation. Press the `left` and `right` arrow keys to cycle through his other animations. 🎉

<img width="798" alt="Spine Boy" src="https://user-images.githubusercontent.com/2236153/72027349-e1255180-323b-11ea-8805-172bb5348a3d.png">

Demo: https://ourcade.github.io/phaser3-typescript-spine/

## Project Structure

```
    ├── ...
    ├── public
    │   ├── assets
    │   │   ├── spine
    │   │   │   ├── spineboy.atlas
    │   │   │   ├── spineboy.json
    │   │   │   ├── spineboy.png
    ├── src
    │   ├── scenes
    │   │   ├── SpineDemo.ts
    │   ├── types
    │   │   ├── globals.d.ts
    │   ├── index.html
    │   ├── main.ts
```

The Spine Boy assets exported from Spine is in `public/assets/spine`. These files are loaded in the `preload()` method of `SpineDemo.ts`.

The Phaser 3 SpinePlugin is loaded in `main.ts`.

## License

[MIT License](https://github.com/ourcade/phaser3-parcel-template/blob/master/LICENSE)
