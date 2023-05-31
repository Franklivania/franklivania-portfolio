import DarkSide from '../../Components/Darkside/DarkSide';
import LightSide from '../../Components/LightSide/LightSide';
import './Landing.scss';

const Landing = ({ themeMap, toggleTheme }) => {
  return (
    <div id="landing">
      <DarkSide
        theme={themeMap['darkside']}
        toggleTheme={() => toggleTheme('darkside')}
      />
      <LightSide
        theme={themeMap['lightside']}
        toggleTheme={() => toggleTheme('lightside')}
      />
    </div>
  );
};

export default Landing;
