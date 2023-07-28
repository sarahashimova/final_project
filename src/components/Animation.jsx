// import React from "react";
import { useState,useEffect } from "react";
import "../styles/animation.scss";

function Animation() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
   setTimeout(()=>{
    setAnimationStarted(true);
   },200)

  }, []);

  return (
    <div className={`enter-from-left ${animationStarted ? 'animate' : ''}`}>
      {/* Your content goes here */}
     <h1>We make your HOME better.</h1>
     <p className="paragraph_animated">
     Here, we strive to provide the ultimate destination for all your home furnishing needs.<br/> Our website is designed to make your furniture shopping experience enjoyable, convenient, and inspiring.<br/> Whether you're looking for contemporary pieces to refresh your living room,<br/> classic furniture to add elegance to your bedroom, or stylish decor to personalize your space, we have it all.
     </p>
    </div>
  );
}

export default Animation;
