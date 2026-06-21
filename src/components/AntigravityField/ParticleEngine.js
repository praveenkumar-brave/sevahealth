export default class ParticleEngine {
    constructor({
      ctx,
      width,
      height,
      mouse,
      config,
    }) {
      this.ctx = ctx;
  
      this.width = width;
      this.height = height;
  
      this.mouse = mouse;
      this.config = config;
  
      this.particles = [];
  
      this.animationFrame =
        null;
  
      this.time = 0;
  
      this.createParticles =
        this.createParticles.bind(
          this
        );
  
      this.animate =
        this.animate.bind(this);
        this.isEntering = true;
      this.createParticles();
      setTimeout(() => {

        this.isEntering = false;
      
      }, 1800);
    }
  
    resize(
      width,
      height
    ) {
      this.width = width;
      this.height = height;
  
      this.particles = [];
  
      this.createParticles();
    }
  
    randomColor() {
      const colors =
        this.config.colors;
  
      return colors[
        Math.floor(
          Math.random() *
            colors.length
        )
      ];
    }
  
    randomType() {
      const rand =
        Math.random() * 100;
  
      if (rand < 40)
        return "cross";
  
      if (rand < 10)
        return "pill";
  
      if (rand < 90)
        return "hex";
  
      return "dot";
    }
  
    createParticles() {
      const count =
        this.config.count;
  
      const centerX =
        this.width / 2;
  
      const centerY =
        this.height / 2;
  
      const maxRadius =
        Math.min(
          this.width,
          this.height
        ) * 1;
  
      for (
        let i = 0;
        i < count;
        i++
      ) {
        const angle =
          Math.random() *
          Math.PI *
          2;
        
        const radius =
          Math.pow(
            Math.random(),
            0.35
          ) * maxRadius;
  
        const x =
          centerX +
          Math.cos(angle) *
            radius;
  
        const y =
          centerY +
          Math.sin(angle) *
            radius;
  
            this.particles.push({
                // x:centerX,
                // y:centerY,
                x:
  centerX +
  (Math.random() - 0.5) * 20,

y:
  centerY +
  (Math.random() - 0.5) * 20,
              
                homeX: x,
                homeY: y,
              
                vx:
  (Math.random() - 0.5) * 8,

vy:
  (Math.random() - 0.5) * 8,
              
                angle,
              
                radius,
              
                noiseOffset:
                  Math.random() * 1000,
              
                depth:
                  Math.random() * 2 + 1,
                
                trail: [],
                
                energy:
                  Math.random(),
              
                size:
                  Math.random() * 3 + 2,
              
                rotation:
                  Math.random() *
                  Math.PI *
                  2,
              
                color:
                  this.randomColor(),
              
                type:
                  this.randomType(),
              });
      }
    }
  
    // createParticles() {

    //     const count =
    //       this.config.count;
      
    //     const centerX =
    //       this.width / 2;
      
    //     const centerY =
    //       this.height / 2;
      
    //     const dnaHeight =
    //       this.height * 0.65;
      
    //     const dnaWidth = 160;
      
    //     const turns = 4;
      
    //     for (
    //       let i = 0;
    //       i < count;
    //       i++
    //     ) {
      
            
    //       const t =
    //         i / count;
      
    //       const y =
    //         centerY -
    //         dnaHeight / 2 +
    //         t * dnaHeight;
      
    //       const wave =
    //         Math.sin(
    //           t *
    //             Math.PI *
    //             2 *
    //             turns
    //         );
      
    //       const leftX =
    //         centerX -
    //         dnaWidth / 2 +
    //         wave * 50;
      
    //       const rightX =
    //         centerX +
    //         dnaWidth / 2 -
    //         wave * 50;
      
    //       const strand =
    //         Math.random() > 0.5
    //           ? "left"
    //           : "right";
      
    //       const homeX =
    //         strand === "left"
    //           ? leftX
    //           : rightX;
      
    //       const homeY = y;
      
    //       this.particles.push({
    //         x: centerX,
    //         y: centerY,
      
    //         homeX,
    //         homeY,
      
    //         vx: 0,
    //         vy: 0,
      
    //         angle:
    //           Math.random() *
    //           Math.PI *
    //           2,
      
    //         radius: 0,
      
    //         noiseOffset:
    //           Math.random() * 1000,
      
    //         depth:
    //           Math.random() * 2 + 1,
      
    //         trail: [],
      
    //         energy:
    //           Math.random(),
      
    //         size:
    //           Math.random() * 2 + 1,
      
    //         rotation:
    //           Math.random() *
    //           Math.PI *
    //           2,
      
    //         color:
    //           this.randomColor(),
      
    //         type:
    //           this.randomType(),
    //       });
    //     }
        
    //   }
    drawConnections() {

        const particles =
          this.particles;
      
        this.ctx.save();
      
        for (
          let i = 0;
          i < particles.length;
          i++
        ) {
      
          const p1 =
            particles[i];
      
          for (
            let j = i + 1;
            j < particles.length;
            j++
          ) {
      
            const p2 =
              particles[j];
      
            const dx =
              p1.x - p2.x;
      
            const dy =
              p1.y - p2.y;
      
            const distance =
              Math.sqrt(
                dx * dx +
                dy * dy
              );
      
            if (
              distance < 60
            ) {
      
              const opacity =
                1 -
                distance / 60;
      
              this.ctx.beginPath();
      
              this.ctx.moveTo(
                p1.x,
                p1.y
              );
      
              this.ctx.lineTo(
                p2.x,
                p2.y
              );
      
              this.ctx.strokeStyle =
                `rgba(
                  14,
                  165,
                  233,
                  ${opacity * 0.12}
                )`;
      
              this.ctx.lineWidth =
                1;
      
              this.ctx.stroke();
            }
          }
        }
      
        this.ctx.restore();
      }
    updateParticle(particle) {

        const {
          springStrength,
          friction,
          interactionRadius,
          repelStrength,
          maxVelocity,
        } = this.config;
      
        const dx =
          particle.homeX -
          particle.x;
      
        const dy =
          particle.homeY -
          particle.y;
      
        // Always return home
      
        // particle.vx +=
        //   dx *
        //   springStrength;
      
        // particle.vy +=
        //   dy *
        //   springStrength;
        const spring =

        this.isEntering
            ? springStrength * 2.5
            : springStrength;

        particle.vx +=
        dx *
        spring;

        particle.vy +=
        dy *
        spring;
      
        // ONLY while mouse is active
      
        if (this.mouse.active) {
      
          // FLOW FIELD
      
          const flowX =
            Math.sin(
              particle.y * 0.002 +
              this.time
            );
      
          const flowY =
            Math.cos(
              particle.x * 0.002 +
              this.time
            );
      
          particle.vx +=
            flowX * 0.04;
      
          particle.vy +=
            flowY * 0.04;
      
          // ORBIT
      
          const orbit =
            Math.sin(
              this.time * 0.5 +
              particle.noiseOffset
            ) * 0.04;
      
          particle.vx +=
            -Math.sin(
              particle.angle
            ) * orbit;
      
          particle.vy +=
            Math.cos(
              particle.angle
            ) * orbit;
      
          const mx =
            particle.x -
            this.mouse.x;
      
          const my =
            particle.y -
            this.mouse.y;
      
          const distance =
            Math.sqrt(
              mx * mx +
              my * my
            );
      
          if (
            distance <
            interactionRadius
          ) {
      
                const force =
                (1 -
                    distance /
                    interactionRadius) *
                repelStrength;

                const angle =
                Math.atan2(
                    my,
                    mx
                );

                particle.vx +=
                Math.cos(angle) *
                force *
                18;

                particle.vy +=
                Math.sin(angle) *
                force *
                18;       
      
            // orbit around cursor
      
            particle.vx +=
              -Math.sin(angle) *
              force *
              1.2;
      
            particle.vy +=
              Math.cos(angle) *
              force *
              1.2;
          }
        }
      
        // IMPORTANT
        // This was commented in your code
        // Put it back
      
        particle.vx *= friction;
        particle.vy *= friction;
      
        particle.vx =
          Math.max(
            -maxVelocity,
            Math.min(
              maxVelocity,
              particle.vx
            )
          );
      
        particle.vy =
          Math.max(
            -maxVelocity,
            Math.min(
              maxVelocity,
              particle.vy
            )
          );
      
        particle.x +=
          particle.vx /
          particle.depth;
      
        particle.y +=
          particle.vy /
          particle.depth;
      
        particle.trail.push({
          x: particle.x,
          y: particle.y,
        });
      
        if (
          particle.trail.length > 6
        ) {
          particle.trail.shift();
        }
      }

    drawTrail(
        particle
      ) {
        const ctx =
          this.ctx;
      
        if (
          particle.trail.length < 2
        ) {
          return;
        }
      
        ctx.beginPath();
        this.ctx.globalAlpha =
        this.config.particleOpacity;
      
        particle.trail.forEach(
          (point, index) => {
            if (index === 0) {
              ctx.moveTo(
                point.x,
                point.y
              );
            } else {
              ctx.lineTo(
                point.x,
                point.y
              );
            }
          }
        );
      
        ctx.strokeStyle =
          particle.color;
      
        ctx.globalAlpha =
          0.12;
      
        ctx.stroke();
      
        ctx.globalAlpha = 1;
      }
  
    drawDot(
      particle,
      dynamicSize
    ) {
      const ctx =
        this.ctx;
  
      ctx.beginPath();
      this.ctx.globalAlpha =
      this.config.particleOpacity;
  
      ctx.arc(
        particle.x,
        particle.y,
        dynamicSize,
        0,
        Math.PI * 2
      );
  
      ctx.fill();
      
    }
  
    drawPill(
      particle
    ) {
      const ctx =
        this.ctx;
  
      ctx.save();
      this.ctx.globalAlpha =
      this.config.particleOpacity;
  
      ctx.translate(
        particle.x,
        particle.y
      );
  
      ctx.rotate(
        particle.rotation
      );
  
      ctx.fillRect(
        -4,
        -1,
        8,
        2
      );
  
      ctx.restore();
    }
  
    drawHex(
      particle
    ) {
      const ctx =
        this.ctx;
        this.ctx.globalAlpha =
        this.config.particleOpacity;
  
      const r =
        particle.size * 2;
  
      ctx.beginPath();
  
      for (
        let i = 0;
        i < 6;
        i++
      ) {
        const angle =
          (Math.PI / 3) *
          i;
  
        const x =
          particle.x +
          Math.cos(
            angle
          ) *
            r;
  
        const y =
          particle.y +
          Math.sin(
            angle
          ) *
            r;
  
        if (i === 0)
          ctx.moveTo(
            x,
            y
          );
        else
          ctx.lineTo(
            x,
            y
          );
      }
  
      ctx.closePath();
  
      ctx.stroke();
    }
  
    drawCross(
      particle
    ) {
      const ctx =
        this.ctx;
        this.ctx.globalAlpha =
        this.config.particleOpacity;
  
      ctx.beginPath();
  
      ctx.moveTo(
        particle.x - 3,
        particle.y
      );
  
      ctx.lineTo(
        particle.x + 3,
        particle.y
      );
  
      ctx.moveTo(
        particle.x,
        particle.y - 3
      );
  
      ctx.lineTo(
        particle.x,
        particle.y + 3
      );
  
      ctx.stroke();
    }
  
    renderParticle(
      particle
    ) {
      const ctx =
        this.ctx;
        this.ctx.globalAlpha =
        this.config.particleOpacity;
    //   ctx.save();
  
    //   ctx.fillStyle =
    //     particle.color;
  
    //   ctx.strokeStyle =
    //     particle.color;
    ctx.save();

    const speed =
    Math.sqrt(
      particle.vx *
        particle.vx +
        particle.vy *
        particle.vy
    );
  
  const dynamicSize =
    particle.size +
    speed * 0.2;
  
  ctx.shadowBlur =
    10 +
    speed * 4;

ctx.shadowColor =
  particle.color;

ctx.fillStyle =
  particle.color;

ctx.strokeStyle =
  particle.color;
  this.drawTrail(
    particle
  );

  
      switch (
        particle.type
      ) {
        case "dot":
          this.drawDot(
            particle
          );
          break;
  
        case "pill":
          this.drawPill(
            particle
          );
          break;
  
        case "hex":
          this.drawHex(
            particle
          );
          break;
  
        case "cross":
          this.drawCross(
            particle
          );
          break;
  
        default:
          this.drawDot(
            particle
          );
      }
  
      ctx.restore();
    }
  
    animate() {
        this.time += 0.01;
        const ctx = this.ctx;
  
      ctx.clearRect(
        0,
        0,
        this.width,
        this.height
      );
const gradient =
  this.ctx.createRadialGradient(
    this.width / 2,
    this.height / 2,
    0,

    this.width / 2,
    this.height / 2,

    this.width * 0.35,
  );

gradient.addColorStop(
  0,
  "rgba(14,165,233,0.05)", "rgba(14,165,233,.12)"
);

gradient.addColorStop(
  1,
  "rgba(14,165,233,0)"
);

ctx.fillStyle =
  gradient;

ctx.fillRect(
  0,
  0,
  this.width,
  this.height
);
  
      this.particles.forEach(
        (particle) => {
          this.updateParticle(
            particle
          );
  
          this.renderParticle(
            particle
          );
        }
      );
  
      this.animationFrame =
        requestAnimationFrame(
          this.animate
        );
    }
  
    start() {
      this.animate();
    }
  
    destroy() {
      cancelAnimationFrame(
        this.animationFrame
      );
    }
  }