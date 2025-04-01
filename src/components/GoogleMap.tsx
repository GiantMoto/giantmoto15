import React from 'react';

export default function GoogleMap() {
  return (
    <div className="bg-[#0A0A0A] py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <iframe 
            width="100%" 
            height="400" 
            style={{ maxWidth: '1200px' }}
            frameBorder="0"
            title="Giant Motorsport Location"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDoEdp1xWsgcR7RgQ6iSTrjpIYL_YQ52TU&q=place_id:ChIJVVVRPaRdGkcRYtrszZu3doM"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}