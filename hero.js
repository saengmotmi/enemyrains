const hero = document.getElementById('hero');
const heroStep = 10; //픽셀

class Hero {
  
}

function heroMove(e) {
    let leftMove = parseInt(hero.style.left);

    if ((e.keyCode === 37) && (leftMove > 0)) {
        hero.style.left = leftMove - heroStep + 'px';
        hero.className = "left-face"

    } else if ((e.keyCode === 39) && (leftMove < 765) ){
        hero.style.left = leftMove + heroStep + 'px';
        hero.className = "right-face"
    }
}

function heroReset(e) {
    console.log('reset')
    if ((e.keyCode === 37) || (e.keyCode === 39)) {
        hero.className = "front-face"
    }
}

window.addEventListener('keydown', heroMove);
window.addEventListener('keyup', heroReset);