function Slider() {
    this.imagesUrl = []
    this.currentImgIndex = 0
    this.showButtonPrev = null
    this.showButtonNext = null
    this.slideImg = null
    this.start = function (elId) {
        let that = this

        let elSelector = '#' + elId
        let el = document.querySelector(elSelector)

        this.showButtonPrev = el.querySelector('.show_prev')
        this.showButtonNext = el.querySelector('.show_next')
        this.slideImg = el.querySelector('.img_slider')

        this.showButtonPrev.addEventListener('click', function (e) {
            that.onShowButtonPrev(e)
        })
        this.showButtonNext.addEventListener('click', function (e) {
            that.onShowButtonNext(e)
        })

        this.imagesUrl.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbhkXsG9dOGWOoRdgDo98EP8vtmTSIqNvMA&usqp=CAU')
        this.imagesUrl.push('https://polyakovdmitriy.ru/wp-content/uploads/2019/05/nodejs.png.pagespeed.ce_.9zN9M5IW0F.png')
        this.imagesUrl.push('https://img2.freepng.ru/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg')
        this.imagesUrl.push('https://res.cloudinary.com/practicaldev/image/fetch/s--fBO0Zf3i--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q97aza64off758w3wfdo.jpg')

        this.slideImg.src = this.imagesUrl[this.currentImgIndex]
        this.showButtonPrev.disabled = true
    }

    this.onShowButtonPrev = function () {
        this.currentImgIndex--
        this.slideImg.src = this.imagesUrl[this.currentImgIndex]
        this.showButtonNext.disabled = false

        if (this.currentImgIndex === 0) {
            this.showButtonPrev.disabled = true
        }
    }

    this.onShowButtonNext = function () {
        this.currentImgIndex++
        this.slideImg.src = this.imagesUrl[this.currentImgIndex]
        this.showButtonPrev.disabled = false

        if (this.currentImgIndex === (this.imagesUrl.length - 1)) {
            this.showButtonNext.disabled = true
        }
    }
}

