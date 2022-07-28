export const tsparticleConfig = {
  fullScreen: {
    enable: true,
    zIndex: 100,
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 0,
    },
    color: {
      value: '#ff0000',
      animation: {
        enable: true,
        speed: 180,
        sync: true,
      },
    },
    shape: {
      type: 'image',
      image: {
        src: 'https://res.cloudinary.com/dsj3kwygd/image/upload/v1659000816/handGesture_gjxjlh.png',
      },
    },
    opacity: {
      value: 1,
    },
    size: {
      value: { min: 25, max: 25 },
      animation: {
        enable: true,
        speed: 15,
        minimumValue: 10,
        sync: false,
        startValue: 'min',
        count: 1,
      },
    },
    move: {
      enable: true,
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      speed: { min: 10, max: 20 },
      direction: 'none',
      random: false,
      straight: false,
      outMode: 'destroy',
      gravity: {
        enable: true,
      },
    },
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onclick: {
        enable: true,
        mode: 'trail',
      },
      resize: true,
    },
    modes: {
      trail: {
        delay: 0.1,
        quantity: 20,
      },
    },
  },
  retina_detect: true,
};
