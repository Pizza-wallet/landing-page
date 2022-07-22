function pop(e) {
  let amount = 10;
  // Quick check if user clicked the button using a keyboard
  if (e.clientX === 0 && e.clientY === 0) {
    const bbox = e.target.getBoundingClientRect();
    const x = bbox.left + bbox.width / 2;
    const y = bbox.top + bbox.height / 2;
    for (let i = 0; i < 30; i++) {
      // We call the function createParticle 30 times
      // We pass the coordinates of the button for x & y values
      createParticle(x, y, e.target.dataset.type);
    }
  } else {
    for (let i = 0; i < amount; i++) {
      createParticle(
        e.clientX,
        e.clientY + window.scrollY,
        e.target.dataset.type
      );
    }
  }

  if (e.target.className === 'link') {
    // assign one of the 7 links randomly
    const links = [
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9500000+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The%20most%20guarded%20secret%20in%20the%20world%20%F0%9F%8D%95.%20%0A%0AI%20am%20registering%20to%20become%20a%20special%20ingredient%20for%20the%20crypto%20recipe%20%40Pizza__Wallet%20is%20making.%20%0A%0AUna%20buona%20pizza%20non%20%C3%A8%20una%20pizza%20che%20mangi%20una%20volta%2C%20%C3%A8%20una%20pizza%20che%20vuoi%20mangiare%20sempre.%0A%0A%F0%9F%8D%95%F0%9F%8D%9500001%20%F0%9F%8D%95%F0%9F%8D%95',
      'https://twitter.com/intent/tweet?text=The%20most%20guarded%20secret%20in%20the%20world%20%F0%9F%8D%95.%20%0A%0AI%20am%20registering%20to%20become%20a%20special%20ingredient%20for%20the%20crypto%20recipe%20%40Pizza__Wallet%20is%20making.%20%0A%0AUna%20buona%20pizza%20non%20%C3%A8%20una%20pizza%20che%20mangi%20una%20volta%2C%20%C3%A8%20una%20pizza%20che%20vuoi%20mangiare%20sempre.%0A%0A%F0%9F%8D%95%F0%9F%8D%9500002%20%F0%9F%8D%95%F0%9F%8D%95',
      'https://twitter.com/intent/tweet?text=The%20most%20guarded%20secret%20in%20the%20world%20%F0%9F%8D%95.%20%0A%0AI%20am%20registering%20to%20become%20a%20special%20ingredient%20for%20the%20crypto%20recipe%20%40Pizza__Wallet%20is%20making.%20%0A%0AUna%20buona%20pizza%20non%20%C3%A8%20una%20pizza%20che%20mangi%20una%20volta%2C%20%C3%A8%20una%20pizza%20che%20vuoi%20mangiare%20sempre.%0A%0A%F0%9F%8D%95%F0%9F%8D%9500003%20%F0%9F%8D%95%F0%9F%8D%95',
      'https://twitter.com/intent/tweet?text=The%20most%20guarded%20secret%20in%20the%20world%20%F0%9F%8D%95.%20%0A%0AI%20am%20registering%20to%20become%20a%20special%20ingredient%20for%20the%20crypto%20recipe%20%40Pizza__Wallet%20is%20making.%20%0A%0AUna%20buona%20pizza%20non%20%C3%A8%20una%20pizza%20che%20mangi%20una%20volta%2C%20%C3%A8%20una%20pizza%20che%20vuoi%20mangiare%20sempre.%0A%0A%F0%9F%8D%95%F0%9F%8D%9500004%20%F0%9F%8D%95%F0%9F%8D%95',
      'https://twitter.com/intent/tweet?text=The%20most%20guarded%20secret%20in%20the%20world%20%F0%9F%8D%95.%20%0A%0AI%20am%20registering%20to%20become%20a%20special%20ingredient%20for%20the%20crypto%20recipe%20%40Pizza__Wallet%20is%20making.%20%0A%0AUna%20buona%20pizza%20non%20%C3%A8%20una%20pizza%20che%20mangi%20una%20volta%2C%20%C3%A8%20una%20pizza%20che%20vuoi%20mangiare%20sempre.%0A%0A%F0%9F%8D%95%F0%9F%8D%9500005%20%F0%9F%8D%95%F0%9F%8D%95',
      'https://twitter.com/intent/tweet?text=The%20most%20guarded%20secret%20in%20the%20world%20%F0%9F%8D%95.%20%0A%0AI%20am%20registering%20to%20become%20a%20special%20ingredient%20for%20the%20crypto%20recipe%20%40Pizza__Wallet%20is%20making.%20%0A%0AUna%20buona%20pizza%20non%20%C3%A8%20una%20pizza%20che%20mangi%20una%20volta%2C%20%C3%A8%20una%20pizza%20che%20vuoi%20mangiare%20sempre.%0A%0A%F0%9F%8D%95%F0%9F%8D%9500006%20%F0%9F%8D%95%F0%9F%8D%95',
    ];

    const randomIndex = Math.floor(Math.random() * (7 - 0) + 0);

    setTimeout(function () {
      window.open(links[randomIndex], '_blank');
    }, 1000);
  }
}
function createParticle(x, y, type) {
  const particle = document.createElement('particle');
  document.body.appendChild(particle);
  let width = Math.floor(Math.random() * 30 + 8);
  let height = width;
  let destinationX = (Math.random() - 0.5) * 3000;
  let destinationY = (Math.random() - 0.5) * 3000;
  let rotation = Math.random() * 520;
  // let delay = Math.random() * 200;

  switch (type) {
    case 'gesture':
      particle.innerHTML = ['🤌'];
      particle.style.fontSize = `${Math.random() * 24 + 20}px`;
      width = height = 'auto';
      break;
  }

  particle.style.width = `${width}px`;
  particle.style.height = `${height}px`;
  const animation = particle.animate(
    [
      {
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
        opacity: 1,
      },
      {
        transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${
          y + destinationY
        }px) rotate(${rotation}deg)`,
        opacity: 1,
      },
    ],
    {
      // duration: Math.random() * 1000 + 5000,
      duration: 2000,
      // easing: 'cubic-bezier(0, .9, .57, 1)',
      // delay: delay,
    }
  );
  animation.onfinish = removeParticle;
}
function removeParticle(e) {
  e.srcElement.effect.target.remove();
}

document
  .querySelectorAll('div')
  .forEach((div) => div.addEventListener('click', pop));
