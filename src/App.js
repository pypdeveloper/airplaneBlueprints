import React, {PureComponent} from 'react';
import './App.css';



function App() {
  return (
      <div >
        <div id="main">
      <div class="cardDiv">
        <div>
        <h3 class="cardTitle">Airbus 320 and Airbus 320neo</h3>
        <img class="cardImage"src={require ("./images/A320neo.jpg")}></img>
        <h4 class="cardDescription">Description: The A320 and the A320neo are narrow body jetliners, these aircraft's are used for short haul flights.  The A320 and A320neo are the best selling aircraft of all time. </h4>
        <button class="cardButton" onClick={() => window.open( 'https://www.airbus.com/content/dam/corporate-topics/publications/backgrounders/techdata/aircraft_characteristics/Airbus-Commercial-Aircraft-AC-A320.pdf')}>get the blueprint</button>
        </div>
      </div>
      
      <div class="cardDiv">
          <div> 
        <h3 class="cardTitle">Boeing 737</h3>
        <img class="cardImage"src={require ("./images/b737.jpg")}></img>
        <h4 class="cardDescription">Description: Boeing 737 is a old but very popular jet, the boeing 737 is a narrow body jetliners. with 9 variant's, and another whole family the 737max.</h4>
        <button class="cardButton" onClick={() => window.open( 'http://www.boeing.com/assets/pdf/commercial/airports/acaps/737.pdf')}>get the blueprint</button>
        </div>
        </div>

      <div class="cardDiv">
        <div>
        <h3 class="cardTitle">Airbus A330</h3>
        <img class="cardImage"src={require ("./images/a330.jpg")}></img>
        <h4 class="cardDescription">Description: The airbus is a wide body jetliner, the neo variant of this family of aircraft was airbus's answer to the boeing 787.</h4>
        <button class="cardButton" onClick={() => window.open( 'https://www.airbus.com/content/dam/corporate-topics/publications/backgrounders/techdata/aircraft_characteristics/Airbus-Commercial-Aircraft-AC-A330.pdf')}>get the blueprint</button>
        </div>
      </div>

      <div class="cardDiv">
        <div>
        <h3 class="cardTitle">Boeing 767</h3>
        <img class="cardImage"src={require ("./images/b767.jpg")}></img>
        <h4 class="cardDescription">Description: Boeing 767 is the bigger brother of the boeing 757, and is one of the most popular wide body jetliner. The 767 is a long range aircraft with a lot of power.</h4>
        <button class="cardButton" onClick={() => window.open( 'http://www.boeing.com/assets/pdf/commercial/airports/acaps/767.pdf')}>get the blueprint</button>
        </div>
        </div>

    <div class="cardDiv">
    <div>
    <h3 class="cardTitle">Airbus A350</h3>
    <img class="cardImage"src={require ("./images/a350.jpg")}></img>
    <h4 class="cardDescription">Description: The A350 is an wide body super long range aircraft, meant to compete with the 777 and although not direct competitor but the A350 competes with the 787. </h4>
    <button class="cardButton" onClick={() => window.open( 'https://www.airbus.com/content/dam/corporate-topics/publications/backgrounders/techdata/aircraft_characteristics/Airbus-Commercial-Aircraft-AC-A350-900-1000.pdf')}>get the blueprint</button>
    </div>
    </div>

    <div class="cardDiv">
    <div>
    <h3 class="cardTitle">Boeing 787</h3>
    <img class="cardImage"src={require ("./images/b787.jpg")}></img>
    <h4 class="cardDescription">Description: Boeing 787 was launched on July8 2017 and before launch the code name was the 7E7, the Boeing 787 was the first commercial aircraft to feature a complete composite body.</h4>
    <button class="cardButton" onClick={() => window.open( 'https://www.boeing.com/assets/pdf/commercial/airports/acaps/787.pdf')}>get the blueprint</button>
    </div>
    </div>

    <div class="cardDiv">
    <div>
    <h3 class="cardTitle">Boeing 777</h3>
    <img class="cardImage"src={require ("./images/b777.jpg")}></img>
    <h4 class="cardDescription">Description: Boeing 777 is a wide body jetliner is one of the longest commercial jetliners in the world and the model that is about come out is going to be the longest jetliner in the world.</h4>
    <button class="cardButton" onClick={() => window.open( 'http://www.boeing.com/assets/pdf/commercial/airports/acaps/777_23.pdf')}>get the blueprint</button>
    </div>
    </div>

    <div class="cardDiv">
    <div>
    <h3 class="cardTitle">Airbus A300</h3>
    <img class="cardImage"src={require ("./images/a300.jpg")}></img>
    <h4 class="cardDescription">Description: The airbus a300 is a wide body medium to long-range jetliner and the bus the first airbus ever. Now days there are none to barely any commercial aircraft but there are more freighter.</h4>
    <button class="cardButton" onClick={() => window.open( 'https://www.airbus.com/content/dam/corporate-topics/publications/backgrounders/techdata/aircraft_characteristics/Airbus-Commercial-Aircraft-AC-A330.pdf')}>get the blueprint</button>
    </div>
    </div>

    <div class="cardDiv">
    <div>
    <h3 class="cardTitle">Airbus A380</h3>
    <img class="cardImage"src={require ("./images/a380.jpg")}></img>
    <h4 class="cardDescription">Description: The A380 is the biggest commercial airplane ever so called the superjumbo, and is a double decker aircraft. Unfortunately there is no freighter version of the A380, but Hi fly made a passenger a380 to a freighter.</h4>
    <button class="cardButton" onClick={() => window.open( 'https://www.airbus.com/content/dam/corporate-topics/publications/backgrounders/techdata/aircraft_characteristics/Airbus-Aircraft-AC-A380.pdf')}>get the blueprint</button>
    </div>
    </div>

    <div class="cardDiv">
    <div>
    <h3 class="cardTitle">Boeing 747</h3>
    <img class="cardImage"src={require ("./images/b747.jpg")}></img>
    <h4 class="cardDescription">Description: Boeing 747 is a four engine jombo jet, and the 747 is the airplane that changed travel unfortunately like the airbus a380 the A380 and B747 program is shutting down. The 747 has a freighter version and it is more popular than the passenger version</h4>
    <button class="cardButton">get the blueprint</button>
    </div>
    </div>

    <div class="cardDiv">
    <div>
    <h3 class="cardTitle">Boeing 727</h3>
    <img class="cardImage"src={require ("./images/b727.jpg")}></img>
    <h4 class="cardDescription">Description: Boeing 727 Three engine airplane with all the engines on the back of the plane, The boeing 727 is a super old airplane and there are no 727 flying any more. The 727 is a short haul narrow body jetliner and the aircraft has been replaced by the 737 or A320</h4>
    <button class="cardButton" onClick={() => window.open( 'https://www.boeing.com/resources/boeingdotcom/commercial/airports/acaps/727.pdf')}>get the blueprint</button>
    </div>
    </div>

    <div class="cardDiv">
    <div>
    <h3 class="cardTitle">Airbus A340-500</h3>
    <img class="cardImage"src={require ("./images/A340-500.jpeg")}></img>
    <h4 class="cardDescription">Description: Boeing 727 Three engine airplane with all the engines on the back of the plane, The boeing 727 is a super old airplane and there are no 727 flying any more. The 727 is a short haul narrow body jetliner and the aircraft has been replaced by the 737 or A320</h4>
    <button class="cardButton" onClick={() => window.open( 'https://www.airbus.com/content/dam/corporate-topics/publications/backgrounders/techdata/aircraft_characteristics/Airbus-Commercial-Aircraft-AC-A340-500_600.pdf')}>get the blueprint</button>
    </div>
    </div>
    </div>
    <footer>
      <div>
      <p>Airbus A320 image taken from: https://ja.m.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Airbus_A320neo_landing_01_crop.jpg</p>
      <p>Boeing 737 image taken from: https://pixabay.com/photos/flight-aircraft-boeing-737-4635500/</p>
      <p>Airbus A330 image taken from: https://www.wallpaperflare.com/swiss-airline-about-to-take-off-airbus-a330-swiss-airlines-wallpaper-zepvm</p>
      <p>Boeing 767 image taken from: https://pixabay.com/photos/united-airlines-boeing-767-take-off-4798787/</p>
      <p>Airbus A350 image taken from: https://commons.wikimedia.org/wiki/File:Cathay_Pacific_Airbus_A350-900_B-LRJ_(39342897822).jpg</p>
      <p>Boeing 787 image taken from: https://www.pikist.com/free-photo-sydfx</p>
      <p>Airbus a300 image taken from: https://commons.wikimedia.org/wiki/File:Airbus_A300_DHL_(32944070741).jpg</p>
      <p>Airbus a380 image taken from: https://www.flickr.com/photos/volvob12b/42946453761</p>
      <p>Boeing 747 image taken from: https://commons.wikimedia.org/wiki/File:Thai_Airways_International_Boeing_747-4D7_HS-TGP_MUC_2015_03.jpg</p>
      <p>Boeing 727 image taken from: https://www.flickr.com/photos/33465428@N02/4406863537</p>
      <p>Airbus A340-500 image taken from: https://www.airlines-inform.com/commercial-aircraft/airbus-a340-500.html </p>
      </div>
    </footer>
    </div>
  );
}

export default App;