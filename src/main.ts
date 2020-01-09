import Phaser from 'phaser'
import 'phaser/plugins/spine/dist/SpinePlugin'

import SpineDemo from './scenes/SpineDemo'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [SpineDemo],
	plugins: {
		scene: [
			{ key: 'SpinePlugin', plugin: window.SpinePlugin, mapping: 'spine' }
		]
	}
}

export default new Phaser.Game(config)
