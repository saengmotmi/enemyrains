class Hero {
    constructor() {
        this.heroId = document.getElementById('hero');
        this.heroStep = 10; //픽셀 heroStep = 10; //픽셀
    }

    move = e => {
        let leftMove = parseInt(this.heroId.style.left);

        if ((e.keyCode === 37) && (leftMove > 0)) {
            this.heroId.style.left = leftMove - this.heroStep + 'px';
            this.heroId.className = "left-face"
    
        } else if ((e.keyCode === 39) && (leftMove < 765) ){
            this.heroId.style.left = leftMove + this.heroStep + 'px';
            this.heroId.className = "right-face"
        }    
    }

    reset = e => {
        if ((e.keyCode === 37) || (e.keyCode === 39)) {
            this.heroId.className = "front-face"
        }
    }
}

// function heroMove(e) {
//     let leftMove = parseInt(hero.style.left);

//     if ((e.keyCode === 37) && (leftMove > 0)) {
//         hero.style.left = leftMove - heroStep + 'px';
//         hero.className = "left-face"

//     } else if ((e.keyCode === 39) && (leftMove < 765) ){
//         hero.style.left = leftMove + heroStep + 'px';
//         hero.className = "right-face"
//     }
// }

// function heroReset(e) {
//     console.log('reset')
//     if ((e.keyCode === 37) || (e.keyCode === 39)) {
//         hero.className = "front-face"
//     }
// }

const myHero = new Hero();

window.addEventListener('keydown', myHero.move);
window.addEventListener('keyup', myHero.reset);