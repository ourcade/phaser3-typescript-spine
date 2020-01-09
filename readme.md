# Phaser 3 + TypeScript + Spine
> Example project for Spine animations in Phaser 3 with TypeScript plus SpinePlugin typing files! 🌟

![License](https://img.shields.io/badge/license-MIT-green)

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
	│   │   ├── SpineFile.d.ts
	│   │   ├── SpineGameObject.d.ts
	│   │   ├── SpinePlugin.d.ts
    │   ├── index.html
    │   ├── main.ts
```

The Spine Boy assets exported from Spine is in `public/assets/spine`. These files are loaded in the `preload()` method of `SpineDemo.ts`.

The typing files that provide IntelliSense for VS Code is in `src/types`. These files were hand-created from Phaser v3.21.0. 

The Phaser 3 SpinePlugin is loaded in `main.ts`.

## License

[MIT License](https://github.com/ourcade/phaser3-parcel-template/blob/master/LICENSE)