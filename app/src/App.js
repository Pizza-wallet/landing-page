import './index.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { tsparticleConfig } from './tsparticleConfig';
import ReactPlayer from 'react-player';

function App() {
  const particlesInit = async (main) => {
    console.log(main);
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const handleButtonClick = () => {
    const links = [
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9503495+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9504307+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9502376+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%95084552+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9500380+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9502196+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9506481+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9511740+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9504900+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%95079511+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9500270+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9500938+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9500210+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9500837+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9502576+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9500989+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9505287+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9502938+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9504810+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9522948+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%95012289+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9508340+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9500087+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9500220+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9521980+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9502899+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9533847+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9511490+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9501700+%F0%9F%8D%95%F0%9F%8D%95+',
      'https://twitter.com/intent/tweet?text=The+most+guarded+secret+in+the+world+%F0%9F%8D%95.+%0D%0A%0D%0AI+am+registering+to+become+a+special+ingredient+for+the+crypto+secret+sauce+recipe+%40Pizza__Wallet+is+making.+%0D%0A%0D%0AUna+buona+pizza+non+%C3%A8+una+pizza+che+mangi+una+volta%2C+%C3%A8+una+pizza+che+vuoi+mangiare+sempre.%0D%0A%0D%0A%F0%9F%8D%95%F0%9F%8D%9518210+%F0%9F%8D%95%F0%9F%8D%95+',
    ];

    let randomIndex = Math.floor(Math.random() * (31 - 0) + 0);

    if (!links[randomIndex] || typeof links[randomIndex] === undefined) {
      // assign fallback url
      randomIndex = 0;
    }
    // setTimeout(function () {
    //   window.open(links[randomIndex], '_blank');
    // }, 1000);
    window.open(links[randomIndex], '_blank');
  };
  
  let videoUrl =
    'https://gateway.pinata.cloud/ipfs/QmQ6y8ygqJnCz7U67K54vd4iKKHb9gcfsFTbo5Rod9RYkP/Assets/pizza-wallet-neon-sign-chrome.webm';
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari) {
    videoUrl = [
      'https://gateway.pinata.cloud/ipfs/QmQ6y8ygqJnCz7U67K54vd4iKKHb9gcfsFTbo5Rod9RYkP/Assets/neon-sign-animation-transparent.mov'
    ];
  }

  const browserSpec = isSafari ? 'safari' : 'other';

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={tsparticleConfig}
      />
      <div className="absoluteContainer">
        <div className="videoContainer">
          <ReactPlayer
            width="100%"
            height="100%"
            className="player"
            playing={true}
            loop
            muted
            url={videoUrl}
          />
          <div className="main-button-container">
            <div className="main-button">
              <a onClick={handleButtonClick} className="btn">
                <span className="link" data-type="gesture">
                  GET A SLICE
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="social-icons">
        <div>
          <div className="icon-container">
            <a
              href="https://docs.pizzawallet.io"
              target="_blank"
              rel="noreferrer"
              className="nav-button-link"
            >
              <p className="nav-button">About</p>
            </a>
            <div className="font-aws">
              <a
                href="https://twitter.com/Pizza__Wallet"
                target="_blank"
                rel="noreferrer"
                className="icons"
              >
                <i className="fa fa-twitter icons" aria-hidden="true"></i>
              </a>
            </div>
            <div className="font-aws">
              <a
                href="https://www.instagram.com/pizza__wallet/"
                target="_blank"
                rel="noreferrer"
                className="icons"
              >
                <i className="fa fa-instagram icons" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
