declare namespace Phaser.Loader.FileTypes
{
	// https://github.com/photonstorm/phaser/blob/v3.21.0/plugins/spine/src/SpineFile.js#L15
	interface SpineFileConfig
	{
		/**
		 * The key of the file. Must be unique within both the Loader and the Texture Manager.
		 */
		key: string

		/**
		 * The absolute or relative URL to load the texture image file from.
		 */
		textureURL?: string
		
		/**
		 * The default file extension to use for the image texture if no url is provided.
		 */
		textureExtension?: string

		/**
		 * Extra XHR Settings specifically for the texture image file.
		 */
		textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject

		/**
		 * The filename of an associated normal map. It uses the same path and url to load as the texture image.
		 */
		normalMap?: string

		/**
		 * The absolute or relative URL to load the atlas data file from.
		 */
		atlasURL?: string

		/**
		 * The default file extension to use for the atlas data if no url is provided.
		 */
		atlasExtension?: string

		atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject
	}

	class SpineFile extends Phaser.Loader.MultiFile
	{
		constructor(
			loader: Phaser.Loader.LoaderPlugin,
			key: string | Phaser.Loader.FileTypes.SpineFileConfig,
			jsonURL: string | string[],
			atlasURL: string,
			preMultipliedAlpha: boolean,
			jsonXhrSettings: Phaser.Types.Loader.XHRSettingsObject,
			atlasXhrSettings: Phaser.Types.Loader.XHRSettingsObject
		)

		addToCache()
	}
}
