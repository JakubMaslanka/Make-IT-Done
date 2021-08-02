import React, { useRef } from 'react';

function Settings() {
  const SettingsValue = {
    workTime: useRef(null),
    shortBreakTime: useRef(null),
    longBreakTime: useRef(null),
  };

  return (
    <div>
      <form>
        <input type="number" ref={SettingsValue.workTime} />
        <input type="number" ref={SettingsValue.shortBreakTime} />
        <input type="number" ref={SettingsValue.longBreakTime} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Settings;
