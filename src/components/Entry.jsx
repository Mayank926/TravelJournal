import "./Entry.css";

const Entry = (props) => {
  return (
    <article className="article">
      <div id="mainImageBox">
        <img
          className="countryImg"
          src={props.img.src}
          alt={props.img.alt}
        ></img>
      </div>
      <div className="entryContent">
        <div className="NavigationFlex">
          <img
            src="images/marker.png"
            id="mapPinLogo"
            alt="mapPin"
          ></img>
          <span id="countryName">{props.country}</span>
          <a href={props.googleMapLink}>Vew on Google Maps</a>
        </div>
        <h1>{props.title}</h1>
        <h5>{props.dates}</h5>
        <span id="countryDescription">
          {props.text}
        </span>
      </div>
    </article>
  );
};

export default Entry;
// This component is used to display the individual entries in the travel journal. It will be used in the App component to display the list of entries.
