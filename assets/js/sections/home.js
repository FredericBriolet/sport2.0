import config from 'config'
import utils from 'utils'
import classes from 'dom-classes'
import Default from './default'
import Smooth from 'smooth-scrolling'

class Home extends Default {
	
	constructor(opt) {
		
		super(opt)

		this.slug = 'home'
		this.ui = null
	}
	
	init(req, done) {

		super.init(req, done)
	}

	ready(done) {

		super.ready()
		const section = document.querySelector('.vs-section')
		const smooth = new Smooth({
		  native: true,
		  section: section,
		  ease: 0.1
		})
		console.log(section)

		smooth.init()

		done()
	}

	animateIn(req, done) {

		classes.add(config.body, `is-${this.slug}`)
		
		TweenLite.to(this.page, 1, {
			autoAlpha: 1,
			ease: Expo.easeInOut,
			onComplete: done
		})
	}

	animateOut(req, done) {
		
		classes.remove(config.body, `is-${this.slug}`)

		TweenLite.to(this.page, 0.7, {
			autoAlpha: 0,
			ease: Expo.easeInOut,
			onComplete: done
		})
	}

	destroy(req, done) {

		super.destroy()

		this.ui = null

		this.page.parentNode.removeChild(this.page)
		
		done()
	}
}

module.exports = Home