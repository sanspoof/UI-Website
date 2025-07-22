import { forwardRef } from "react";

const Tag = forwardRef(({ title }, ref) => (
  <span
    ref={ref}
    className="border border-solid py-1.5 px-4 rounded-3xl text-xs lg:text-sm dark:border-gray-400 dark:text-white border-gray-900 text-black"
  >
    {title}
  </span>
));

export default Tag;