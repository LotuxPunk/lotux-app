
import React from "react";
import { SocialIcon } from 'react-social-icons';
import { animated, useSpring } from 'react-spring';

class App extends React.Component {
  render() {
    return (
      <>
        <div class="container">
          <h1 class="vertical text-center display-1">Hi. I'm Clément Vandendaelen<br /><small class="text-muted">Programmer Analyst</small></h1>
          <div class="container mt-5">
            <div class="d-flex gap-3 mx-auto justify-content-center">
              <Boop scale={1.1} timing={200}>
                <SocialIcon target="_blank" className="mh-2" fgColor="#ffffff" url="https://twitter.com/VandendaelenC" style={{ height: 50, width: 50 }} />
              </Boop>
              <Boop scale={1.1} timing={200}>
                <SocialIcon target="_blank" fgColor="#ffffff" url="https://www.linkedin.com/in/cl%C3%A9ment-vandendaelen/" style={{ height: 50, width: 50 }} />
              </Boop>
              <Boop scale={1.1} timing={200}>
                <SocialIcon target="_blank" fgColor="#ffffff" url="https://github.com/LotuxPunk" style={{ height: 50, width: 50 }} />
              </Boop>
              <Boop scale={1.1} timing={200}>
                <SocialIcon target="_blank" url="mailto:vandendaelen@gmail.com" style={{ height: 50, width: 50 }} />
              </Boop>
              <Boop scale={1.1} timing={200}>
                <SocialIcon target="_blank" fgColor="#ffffff" url="https://discordapp.com/users/212577316960862208" style={{ height: 50, width: 50 }} />
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
