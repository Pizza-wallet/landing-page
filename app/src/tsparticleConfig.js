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
      value: 18,
      animation: {
        enable: true,
        speed: 15,
        minimumValue: 18,
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
      speed: 20,
      direction: 'none',
      random: false,
      straight: false,
      outMode: 'destroy',
      // gravity: {
      //   enable: true,
      //   acceleration: 70,
      // },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      direction: 'random',
      move: true,
      animation: {
        enable: true,
        speed: 30,
      },
    },
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 10,
      },
    },
  },
  retina_detect: true,
};
