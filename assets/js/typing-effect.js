class TypingEffect {
    constructor(element, phrases, options = {}) {
        this.element = element;
        this.phrases = phrases;
        this.currentPhrase = 0;
        this.currentChar = 0;
        this.isDeleting = false;
        this.options = {
            typeSpeed: options.typeSpeed || 100,
            deleteSpeed: options.deleteSpeed || 50,
            pauseTime: options.pauseTime || 2000
        };
        this.type();
    }

    type() {
        const currentPhrase = this.phrases[this.currentPhrase];
        
        if (this.isDeleting) {
            this.currentChar--;
        } else {
            this.currentChar++;
        }

        this.element.innerHTML = `${currentPhrase.substring(0, this.currentChar)}<span class="cursor"></span>`;

        let typeSpeed = this.isDeleting ? this.options.deleteSpeed : this.options.typeSpeed;

        if (!this.isDeleting && this.currentChar === currentPhrase.length) {
            typeSpeed = this.options.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentChar === 0) {
            this.isDeleting = false;
            this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}
