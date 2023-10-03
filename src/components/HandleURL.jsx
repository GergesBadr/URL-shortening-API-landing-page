import { useState } from "react";
import EnterLinkForm from "./EnterLinkForm";
import Results from "./Results";
import useLocalStorage from "../hooks/useLocalStorage";

function HandleURL() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [userURL, setUserUrl] = useState("");
  const [recievedData, setRecievedData] = useLocalStorage("links", []);

  async function fetchData() {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${userURL}`,
      );
      const data = await res.json();
      if (!data.ok) {
        setHasError("Please enter a valid URL");
      } else {
        setHasError(null);
        setRecievedData([...recievedData, data]);
      }
    } catch (err) {
      setHasError("Please enter a valid URL");
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!userURL) {
      setHasError("Please add a link");
    } else {
      fetchData();
    }
  }

  function handleDeleteItem(uniqueCode) {
    setRecievedData((items) =>
      items.filter((url) => url.result.code !== uniqueCode),
    );
  }

  return (
    <section className="bg-section-bg pb-20 pt-4 md:pt-6">
      <div className="center-content space-y-10">
        <EnterLinkForm
          isLoading={isLoading}
          hasError={hasError}
          userURL={userURL}
          setUserUrl={setUserUrl}
          handleSubmit={handleSubmit}
        />
        <Results recievedData={recievedData} onDeleteItem={handleDeleteItem} />
      </div>
    </section>
  );
}

export default HandleURL;
