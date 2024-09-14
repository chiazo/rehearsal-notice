import ReactMarkdown from "react-markdown";
import { contact } from "./data/markdown";

const App = () => {
  return (
    <div>
      <div className="content">
        <ReactMarkdown>{contact}</ReactMarkdown>
      </div>
    </div>
  );
};

export default App;
