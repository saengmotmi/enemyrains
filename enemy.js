const bg = document.getElementById('bg');
const ghostStep = 3; //픽셀
const ghostStepInterval = 20; //밀리세컨드
const ghostGenerateInterval = 1000; //밀리세컨드
let killScore = 0;

class Enemy {
    constructor() {
        this.ghost = document.createElement('div');
        this.createGhost();
        this.moveDown();
        this.isDead();
    }

    createGhost = () => {
        //createElement를 사용해 고스트를 생성
        let randX = Math.random() * 755;

        this.ghost.className = "ghost-down";
        
        this.ghost.style.left = parseInt(randX) + 'px';
        this.ghost.style.top = '0';
        bg.appendChild(this.ghost);
    }

    moveDown = () => {
        setInterval(()=> {
            this.ghost.style.top =  parseInt(this.ghost.style.top) + ghostStep + 'px';
            this.isDead();
        }, ghostStepInterval);
    }

    isDead = () => {
        //createGhost에서 생성된 고스트를 setInterval을 사용해 아래로 이동
        //조건을 판정해 만약 죽었으면 isDead() 호출
    
        if (parseInt(this.ghost.style.top) > 490) {
            let heroLeft = parseInt(myHero.heroId.style.left);
            let heroRight = parseInt(myHero.heroId.style.left)+35;
            let ghostLeft = parseInt(this.ghost.style.left);
            let ghostRight = parseInt(this.ghost.style.left)+45;

            if ((heroLeft <= ghostRight) && (ghostRight <= heroRight)) {
                this.ghost.classList.add('ghost-dead');
            } else if ((heroRight >= ghostLeft) && (heroRight <= ghostRight)) {
                this.ghost.classList.add('ghost-dead');
            }
            
            if (parseInt(this.ghost.style.top) > 545) {
                this.ghost.remove();
            }
        }
    }
}

setInterval(() => {
    const a = new Enemy();
}, ghostGenerateInterval); // 인터벌 마다 Enemy 객체를 생성함

// setInterval( function() {
//         const ghost = document.createElement('div');
//         let randX = Math.random() * 755;

//         ghost.className = "ghost-down";
//         ghost.setAttribute('style', 'left: ' + parseInt(randX) + 'px; top: 0px;');
//         //ghost.setAttribute('style', 'top: 0px;'); //그냥 ghost.style.top 안되나?
//         bg.appendChild(ghost);
//     }, ghostGenerateInterval);

// setInterval ( function() {
//         let ghostMoveDown = document.getElementsByClassName('ghost-down'); //배열 인덱스를 사용하지 않으면 속도 개선 + 세밀한 조작 가능W
//         for (let i = 0; i < ghostMoveDown.length; i++) { //예컨대 객체를 사용한다든가? => "그냥 생성자 함수를 쓰세요"
//             ghostMoveDown[i].style.top = parseInt(ghostMoveDown[i].style.top) + ghostStep + 'px';

//             //피격 판정
//             //매 인터벌 마다 높이를 체크하면?
//             if (parseInt(ghostMoveDown[i].style.top) > 490) {
//                 let heroLeft = parseInt(hero.style.left);
//                 let heroRight = parseInt(hero.style.left)+35;
//                 let ghostLeft = parseInt(ghostMoveDown[i].style.left);
//                 let ghostRight = parseInt(ghostMoveDown[i].style.left)+45;

//                 if ((heroLeft <= ghostRight) && (ghostRight <= heroRight)) {
//                     ghostMoveDown[i].id = "ghost-dead";
//                 } else if ((heroRight >= ghostLeft) && (heroRight <= ghostRight)) {
//                     ghostMoveDown[i].id = "ghost-dead";
//                 } else if ((parseInt(ghostMoveDown[i].style.top) > 545 && (ghostMoveDown[i].id !== "ghost-dead"))) {
//                     ghostMoveDown[i].id = "ghost-dead";
//                     //alert('game over\n' + document.getElementById('score-board').textContent);
//                     //location.reload(true);
//                 }
//             }
//         }
//     }, ghostStepInterval);

// setTimeout( function() { setInterval(() => {
//         let ghostDisappear = document.getElementById('ghost-dead');
//         ghostDisappear.remove();
//     }, ghostGenerateInterval);
// }, 545 / (ghostStep / ghostStepInterval) );  