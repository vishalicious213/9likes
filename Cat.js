class Cat {
    constructor(data) {
        Object.assign(this, data)
    }

    liked() {
        console.log(this.name, "has been liked")
        this.hasBeenLiked = true
        this.hasBeenSwiped = true
    }

    passed() {
        console.log(this.name, "had been passed")
        this.hasBeenSwiped = true
    }
}

export default Cat