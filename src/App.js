
import React from "react";
import { SocialIcon } from 'react-social-icons';
import { animated, useSpring } from 'react-spring';
import icon from '../assets/icon.png'

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid vertical">
          <div className="mx-auto d-flex justify-content-center">
            <Boop rotation={5} timing={200}>
              <img src={icon} className="img-fluid rounded-circle" style={{maxWidth:"200px"}} alt="Floppy disk icon"/>
            </Boop>
          </div>
          <h1 className="text-center display-1">Hi. I'm Clément Vandendaelen</h1>
          <h1 className="text-center display-1"><small className="text-muted">Programmer Analyst</small></h1>
          <div className="container-fluid mt-5">
            <div className="d-flex gap-3 mx-auto justify-content-center">
              <Boop scale={1.1} timing={200}>
                <SocialIcon target="_blank" className="img-fluid" fgColor="#ffffff" url="https://twitter.com/VandendaelenC" />
              </Boop>
              <Boop scale={1.1} timing={200}>
                <SocialIcon target="_blank" className="img-fluid" fgColor="#ffffff" url="https://www.linkedin.com/in/cl%C3%A9ment-vandendaelen/" />
              </Boop>
              <Boop scale={1.1} timing={200}>
                <SocialIcon target="_blank" className="img-fluid" fgColor="#ffffff" url="https://github.com/LotuxPunk" />
              </Boop>
              <Boop scale={1.1} timing={200}>
                <SocialIcon url="mailto:vandendaelenclement@gmail.com" />
              </Boop>
              <Boop scale={1.1} timing={200}>
                <SocialIcon target="_blank" className="img-fluid" fgColor="#ffffff" url="https://discordapp.com/users/212577316960862208" />
              </Boop>
              <Boop scale={1.1} timing={200}>
                <SocialIcon target="_blank" className="img-fluid" fgColor="#ffffff" url="https://www.twitch.tv/lotuxpunk" />
              </Boop>
              <Boop scale={1.1} timing={200}>
                <SocialIcon target="_blank" className="img-fluid" fgColor="#ffffff" url="https://www.reddit.com/user/LotuxPunk" />
              </Boop>
            </div>
          </div>

        </div>
      </>
    );
  }
}

const Boop = ({ x = 0, y = 0, rotation = 0, scale = 1, timing = 150, children }) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });
  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };
  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default App;
