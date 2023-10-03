import CopyButton from "./CopyButton";

function LinkItem({ item, onDeleteItem }) {
  return (
    <li className="divide-y-2 divide-gray/40 rounded-lg bg-white py-4 lg:flex lg:items-center lg:justify-between lg:divide-y-0 lg:py-3">
      <span className="block px-5 pb-4 font-medium lg:pb-0">
        {item.result.original_link}
      </span>
      <div className="flex flex-col gap-2 px-5 pt-4 lg:flex-row lg:items-center lg:gap-6 lg:pt-0">
        <a
          target="_blank"
          rel="noreferrer"
          href={item.result.full_short_link}
          className="w-fit text-lg font-medium text-cyan"
        >
          {item.result.full_short_link}
        </a>
        <CopyButton itemShortenLink={item.result.full_short_link} />
        <button
          className="btn btn-delete lg:-ml-4"
          onClick={() => onDeleteItem(item.result.code)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default LinkItem;
