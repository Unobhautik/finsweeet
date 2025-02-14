import React from "react";
import '../../styles/Features/featureslogo.css'; // Import CSS for styles

function FeaturesLogo() {
  return (
    <div className="features-logos-background"> {/* Main div for background color */}
      <div className="wrapper-logos"> {/* Child div with fixed width */}
        <div className="features-logos">
          <img src="/assets/images/Logonumber.svg" alt="100,000+ Finsweet Users" className="features-logo-image-1" />
          <img src="/assets/images/Logo 1.svg" alt="Logo 1" className="features-logo-image" />
          <img src="/assets/images/Logo 2.svg" alt="Logo 2" className="features-logo-image" />
          <img src="/assets/images/Logo 3.svg" alt="Logo 3" className="features-logo-image" />
          <img src="/assets/images/Logo 4.svg" alt="Logo 4" className="features-logo-image" />
          <img src="/assets/images/Logo 5.svg" alt="Logo 5" className="features-logo-image" />
        </div>
      </div>
    </div>
  );
}

export default FeaturesLogo;
