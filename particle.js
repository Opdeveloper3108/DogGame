class Particle {
    constructor(game) {
        this.game = game;
        this.markedForDeletion = false;

    }

    update() {
        this.x -= this.speedX + this.game.speed;
        this.y -= this.speedY;
        this.size *= 0.95;
        if (this.size < 0.05) this.markedForDeletion = true;
    }
}

export class Dust extends Particle {
    constructor(game, x, y) {
        super(game);
        this.size = Math.random() * 10 + 10;
        this.x = x;
        this.y = y;
        this.speedX = Math.random();
        this.speedY = Math.random();
        this.color = 'rgba(0, 0, 0, 0.2)';
    };
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
    }
}

export class Splash extends Particle {
    constructor(game, x, y) {
        super(game);
        this.size = Math.random() * 100 + 10;
        this.x = x - this.size * 0.4;
        this.y = y - this.size * 0.5;
        this.speedX = Math.random() * 6 - 4;
        this.speedY = Math.random() * 2 + 1;
        this.gravity = 0;
        this.image = document.getElementById('fire');

    }
    update() {
        super.update();
        this.gravity += 0.1;
        this.y += this.gravity;
    }
    draw(context) {
        context.drawImage(this.image, this.x , this.y * 0.95, this.size, this.size,);
    }
}

export class Fire extends Particle {
    constructor(game, x, y) {
        super(game);
        this.image = document.getElementById('fire')
        this.size = Math.random() * 100 + 10;
        this.x = x;
        this.y = y;
        this.speedX = 1;
        this.speedY = 1;
        this.angle = 0;
        this.va = Math.random() * 0.2 - 0.1;
        this.color = 'black';
    }

       //connect particles(constallation effect)
    //    connectParticles() {
    //     const maxDistance = 100;
    //     for (let a = 0; a < this.particles.length; a++) {
    //         for (let b = a; b < this.particles.length; b++) {
    //             const dx = this.particles[a].x - this.particles[b].x;
    //             const dy = this.particles[a].y - this.particles[b].y;
    //             const distance = Math.hypot(dx, dy);
    //             if (distance < maxDistance) {
    //                 context.beginPath();
    //                 context.moveTo(this.particles[a].x, this.particles[a].y);
    //                 context.lineTo(this.particles[b].x, this.particles[b].y);
    //                 context.stroke();
    //             }
    //         }
    //     }

    // }

    update() {
        super.update();
        this.angle += this.va;
        this.x += Math.sin(this.angle * 4)
        // if (this.particles.length > this.maxParticles) {
        //     this.particles = this.particles.slice(0, this.maxParticles);
        // }
    }



    draw(context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.drawImage(this.image, this.size * 0.2, this.size * 0.4, this.size, this.size);
        // context.beginPath();
        // context.arc(4 * this.size, this.y * 0.4, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.restore();
        
        
    }

}


