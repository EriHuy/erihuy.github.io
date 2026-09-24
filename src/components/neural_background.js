import { useEffect, useRef } from "react";



export default function NeuralBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;
    let particles = [];

    const mouse = {
        x: null,
        y: null,
        radius: 180,
    };

    const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;

        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        createParticles();
    };

    const createParticles = () => {
        const area = window.innerWidth * window.innerHeight;

        // Adjust this number to make the network more/less dense.
        const count = Math.min(110, Math.max(45, Math.floor(area / 15000)));

        particles = Array.from({ length: count }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,

            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,

            radius: Math.random() * 1.5 + 1.5,
        }));
    };

    const handleMouseMove = (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
        mouse.x = null;
        mouse.y = null;
    };

    const draw = () => {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        // Update particles
        particles.forEach((particle) => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0) particle.x = window.innerWidth;
            if (particle.x > window.innerWidth) particle.x = 0;

            if (particle.y < 0) particle.y = window.innerHeight;
            if (particle.y > window.innerHeight) particle.y = 0;

            if (mouse.x !== null && mouse.y !== null) {
                const dx = particle.x - mouse.x;
                const dy = particle.y - mouse.y;

                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;

                    particle.x += (dx / distance) * force * 0.8;
                    particle.y += (dy / distance) * force * 0.8;
                }
            }
        });

        // Draw connections
        particles.forEach((particle, i) => {
            for (let j = i + 1; j < particles.length; j++) {
                const other = particles[j];

                const dx = particle.x - other.x;
                const dy = particle.y - other.y;

                const distance = Math.sqrt(dx * dx + dy * dy);

                const connectionDistance = 130;

                if (distance < connectionDistance) {
                    const opacity = (1 - distance / connectionDistance) * 0.18;

                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(other.x, other.y);

                    ctx.strokeStyle = `rgba(80, 150, 255, ${opacity})`;
                    ctx.lineWidth = 1.7;
                    ctx.stroke();
                }
            }
        });

        const gradient = ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);

        gradient.addColorStop(0, "rgba(70, 160, 255, 0.7)");
        gradient.addColorStop(0.5, "rgba(130, 100, 255, 0.6)");
        gradient.addColorStop(1, "rgba(50, 220, 255, 0.6)");

        // Draw nodes
        particles.forEach((particle) => {
            ctx.beginPath();
            ctx.arc(
                particle.x,
                particle.y,
                particle.radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = gradient;
            ctx.fill();
        });

        animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
