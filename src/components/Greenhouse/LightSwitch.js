import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext'

function LightSwitch() {
  const {themeName, setThemeName} = useTheme()

  function eventHandler() {
    themeName === 'day' ? setThemeName('night') : setThemeName('day')
  }

  return (
    <div className={`light-switch ${themeName}`}>
    {/* <div className="light-switch day"> */}
      <div className="on" onClick={eventHandler}>DAY</div>
      <div className="off" onClick={eventHandler}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;