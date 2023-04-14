class Cat {
    constructor(data) {
        Object.assign(this, data)
    }

    liked() {
        console.log(this.name, "has been liked")
    }

    passed() {
        console.log(this.name, "had been passed")
    }
}

export default Cat