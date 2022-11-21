import cx from "classnames";

type Props = {
  status?: "neutral" | "error" | "success";
};

function WordCard({ status = "neutral" }: Props) {
  const classesByStatus = {
    success: "bg-green-600",
    error: "bg-red-600",
    neutral: "bg-gray-800",
  }[status];

  return (
    <button
      className={cx("p-5 rounded-xl w-full text text-2xl", classesByStatus)}
    >
      Word
    </button>
  );
}

export default WordCard;
