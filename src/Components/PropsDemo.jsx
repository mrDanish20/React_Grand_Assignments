import React from 'react';
import PPCard from './PPCard';

export default function PP() {
  return (
    <div>
      <PPCard title="You successfully read this important alert message." heading="Well done!" />
      <PPCard title="This is another important alert with custom text." heading="Great job!" />
      <PPCard title="Keep up the great work with this alert." heading="Excellent!" />
      <PPCard title="This alert has a bit more info to show the layout." heading="Keep going!" />
      <PPCard title="Another success alert to demonstrate spacing." heading="Amazing!" />
    </div>
  );
}
