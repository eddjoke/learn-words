import cx from "classnames";

interface Props extends React.DOMAttributes<HTMLButtonElement> {
  status?: "neutral" | "error" | "success";
}

function WordCard({ status = "neutral", children, onClick }: Props) {
  const classesByStatus = {
    success: "bg-green-600",
    error: "bg-red-600",
    neutral: "bg-gray-800",
  }[status];

  return (
    <button
      className={cx(
        "p-5 rounded-xl w-full text text-2xl uppercase",
        classesByStatus
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default WordCard;
