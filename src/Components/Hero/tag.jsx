import { forwardRef } from "react";

const Tag = forwardRef(({ title }, ref) => (
  <span
    ref={ref}
    className="border border-solid border-gray-300 py-2 px-4 rounded-3xl text-sm bg-white"
  >
    {title}
  </span>
));

export default Tag;