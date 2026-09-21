export function CheckItem({
  item,
  large,
}: {
  item: string
  large?: boolean
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 w-6 h-6 mt-1 rounded-full flex items-center justify-center">
        <svg
          className="w-4 h-4 text-orange-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>
      <p
        className={`${large ? "text-body md:text-body-lg" : "text-body"} text-coolgray-800 flex-1 whitespace-pre-line`}
      >
        {item}
      </p>
    </div>
  )
}
