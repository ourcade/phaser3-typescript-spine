import Phaser from 'phaser'

const SPINEBOY_KEY = 'spineboy'

export default class SpineDemo extends Phaser.Scene
{
	private spineBoy!: SpineGameObject
	private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
	private animNameLabel!: Phaser.GameObjects.Text
	
	private animationNames: string[] = []
	private animationIndex = 0

	constructor()
	{
		super('spine-demo')
	}

	preload()
	{
		this.load.setPath('assets/spine/')
		this.load.spine(SPINEBOY_KEY, 'spineboy.json', 'spineboy.atlas')
	}

	create()
	{
		const startAnim = 'idle'

		this.spineBoy = this.createSpineBoy(startAnim)
		this.cursors = this.input.keyboard.createCursorKeys()
		this.animNameLabel = this.add.text(400, 100, startAnim, { color: '#fff' })

		this.initializeAnimationsState(this.spineBoy)
	}

	update()
	{
		const size = this.animationNames.length
		if (Phaser.Input.Keyboard.JustDown(this.cursors.right!))
		{
			if (this.animationIndex >= size - 1)
			{
				this.animationIndex = 0
			}
			else
			{
				++this.animationIndex
			}

			this.changeAnimation(this.animationIndex)
		}
		else if (Phaser.Input.Keyboard.JustDown(this.cursors.left!))
		{
			if (this.animationIndex <= 0)
			{
				this.animationIndex = size - 1
			}
			else
			{
				--this.animationIndex
			}

			this.changeAnimation(this.animationIndex)
		}
	}

	private createSpineBoy(startAnim = 'idle')
	{
		const spineBoy = this.add.spine(400, 600, SPINEBOY_KEY, startAnim, true)

		spineBoy.scaleX = 0.5
		spineBoy.scaleY = 0.5

		return spineBoy
	}

	private initializeAnimationsState(spineGO: SpineGameObject)
	{
		const startAnim = spineGO.getCurrentAnimation().name

		spineGO.getAnimationList().forEach((name, idx) => {
			this.animationNames.push(name)
			if (name === startAnim)
			{
				this.animationIndex = idx
			}
		})
	}

	private changeAnimation(index: number)
	{
		const name = this.animationNames[index]
		this.spineBoy.play(name, true)
		this.animNameLabel.text = name
	}
}
