import me from "./data/images/me.JPG";

const App = () => {
  return (
    <div className="home">
      <div className="content">
        <img className="me" src={me} alt="me" />
        <div className="music">
          <>
            <iframe
              data-testid="embed-iframe"
              title="spotify"
              src="https://open.spotify.com/embed/track/79bE4XABQ0ywRpU3ij7NXy?utm_source=generator&theme=0&si=003585f15fd84686"
              width="100%"
              height="300" // increase height here, not in CSS
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <a
              href="https://artists.landr.com/991048256521"
              target="_blank"
              rel="noreferrer"
              className="pre-save-link"
            >
              <button className="pre-save"> Listen on other platforms!</button>
            </a>
            <div
              style={{
                fontSize: "10px",
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                  "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
                fontWeight: 100,
              }}
            ></div>
          </>
        </div>
      </div>
    </div>
  );
};

export default App;
