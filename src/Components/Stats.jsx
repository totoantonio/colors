import React from 'react';

function Stats() {
  return (
    <div className="flex justify-center w-full py-10">
  <div className="flex flex-nowrap justify-center items-center gap-4" style={{ maxWidth: '1200px' }}>
    <div className="stat">
      <div className="stat-title">Downloads</div>
      <div className="stat-value text-primary">31K</div>
      <div className="stat-desc">Jan 1st - Feb 1st</div>
    </div>
    <div className="stat">
      <div className="stat-title">New Users</div>
      <div className="stat-value text-green-500">4,200</div>
      <div className="stat-desc text-green-500">↗︎ 400 (22%)</div>
    </div>
    <div className="stat">
      <div className="stat-title">New Registers</div>
      <div className="stat-value text-red-500">1,200</div>
      <div className="stat-desc text-red-500">↘︎ 90 (14%)</div>
    </div>
  </div>
</div>

  



  
  );
}

export default Stats;
