//gsap animation

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  document.addEventListener("DOMContentLoaded", () => {
    // Timeline for sequence
    const tl = gsap.timeline();

    tl.from(".bg-img", {
      scale: 1.2,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    })
      .from(".overlay", {
        opacity: 0,
        duration: 1,
      }, "-=1")
      .from(".content-box", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.5")
      .from(".heading", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      }, "-=0.3")
      .from(".subheading", {
        opacity: 0,
        y: 30,
        duration: 0.8,
      }, "-=0.4")
      .from(".button", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "bounce.out",
      }, "-=0.2");
  });
