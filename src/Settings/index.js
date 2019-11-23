import React from 'react';
import Button from '../atoms/Button';
import { setLocalName, setLocalLocation } from '../utils';

const Settings = () => {
  return (
    <section>
      <Button onClick={() => setLocalName()} text="reset name"/>
      <Button onClick={() => setLocalLocation()} text="reset location" />
    </section>
  )
}

export default Settings;
