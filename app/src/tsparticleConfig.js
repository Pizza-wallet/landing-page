export const tsparticleConfig = {
  fullScreen: {
    enable: true,
    zIndex: 100,
  },
  fpsLimit: 80,
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
      speed: 15,
      direction: 'none',
      random: true,
      straight: false,
      // angle: {
      //   offset: 100,
      //   value: 50,
      // },
      random: false,
      straight: false,
      outMode: 'destroy',
      gravity: {
        enable: true,
        acceleration: 30,
      },
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
        speed: 100,
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
        quantity: 6,
      },
    },
  },
  retina_detect: true,
};
