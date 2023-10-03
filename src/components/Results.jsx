import LinkItem from "./LinkItem";

function Results({ recievedData, onDeleteItem }) {
  return (
    recievedData && (
      <ul className="space-y-6">
        {recievedData.map((item) => (
          <LinkItem
            key={item.result.code}
            item={item}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    )
  );
}

export default Results;
