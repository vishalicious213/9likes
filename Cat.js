class Cat {
    constructor(data) {
        Object.assign(this, data)
    }

    liked() {
        this.hasBeenLiked = true
        this.hasBeenSwiped = true
    }

    passed() {
        this.hasBeenSwiped = true
    }
}

export default Cat