import me from "./data/images/me.png";

const App = () => {
  return (
    <div className="home">
      <div className="content">
        <img className="me" src={me} alt="me" />
        <div className="music">
          <>
            <iframe
              title="soundcloud"
              width="100%"
              height="450"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/757009434&color=%2350366a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
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
