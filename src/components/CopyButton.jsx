import { useState } from "react";
function CopyButton({ itemShortenLink }) {
  const [isCopied, setIsCopied] = useState(false);
  function handleCopy(textToBeCopied) {
    navigator.clipboard.writeText(textToBeCopied);
    setIsCopied(true);
  }

  return (
    <button
      disabled={isCopied}
      onClick={() => {
        handleCopy(itemShortenLink);
      }}
      className={`btn ${!isCopied ? "btn-primary" : "btn-done"}`}
    >
      {!isCopied ? "Copy" : "Copied!"}
    </button>
  );
}

export default CopyButton;