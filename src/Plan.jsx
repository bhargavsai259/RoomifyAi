import { useEffect } from 'react';

function Plan() {
  useEffect(() => {
    // Load the plan.html file
    fetch('/plan.html')
      .then(response => response.text())
      .then(html => {
        // Render the HTML content
        document.getElementById('plan-container').innerHTML = html;
        
        // Execute scripts from the HTML
        const scripts = document.getElementById('plan-container').querySelectorAll('script');
        scripts.forEach(script => {
          const newScript = document.createElement('script');
          if (script.src) {
            newScript.src = script.src;
          } else {
            newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript);
        });
      });
  }, []);

  return <div id="plan-container"></div>;
}

export default Plan;
