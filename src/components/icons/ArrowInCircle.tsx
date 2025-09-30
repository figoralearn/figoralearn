interface ArrowInCircleProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function ArrowInCircle({
  className,
  ...props
}: ArrowInCircleProps) {
  return (
    <svg
      width="53"
      height="53"
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M28.8727 18.5412L36.8044 26.4729M36.8044 26.4729L28.8727 34.4046M36.8044 26.4729H15.6531M50.0239 26.4729C50.0239 29.5977 49.4084 32.692 48.2126 35.5789C47.0168 38.4659 45.2641 41.089 43.0545 43.2986C40.8449 45.5082 38.2217 47.2609 35.3348 48.4568C32.4478 49.6526 29.3536 50.2681 26.2288 50.2681C23.1039 50.2681 20.0097 49.6526 17.1227 48.4568C14.2358 47.2609 11.6126 45.5082 9.40304 43.2986C7.19345 41.089 5.44071 38.4659 4.24489 35.5789C3.04907 32.692 2.43359 29.5977 2.43359 26.4729C2.43359 20.162 4.94058 14.1096 9.40304 9.64718C13.8655 5.18472 19.9179 2.67773 26.2288 2.67773C32.5396 2.67773 38.592 5.18472 43.0545 9.64718C47.5169 14.1096 50.0239 20.162 50.0239 26.4729Z"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
