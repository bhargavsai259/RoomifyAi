import { useEffect } from 'react';

function Plan() {
  useEffect(() => {
    // Redirect to the standalone plan.html page
    window.location.href = '/plan.html';
  }, []);

  return (
    <div id="plan-container">
      <p>Loading 3D floor planner...</p>
    </div>
  );
}

export default Plan;
