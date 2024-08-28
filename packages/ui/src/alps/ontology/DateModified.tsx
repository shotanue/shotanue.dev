import type { DateModified as Descriptor } from "../descriptor";
import { format, formatDistance, constructNow } from "date-fns";
import { ja } from "date-fns/locale";

/**
 * A component that displays the date modified.
 * @param children The date modified.
 * @example
 * ```tsx
 * <DateModified>2021-09-01</DateModified>
 * ```
 */
export const DateModified: React.FC<{
  children: Descriptor;
  from?: Date | string;
}> = ({ children, from = new Date() }) => {
  return (
    <div className="text-gray-600 text-xs">
      Modified:
      <div className="flex gap-2">
        <span>{format(children, "yyyy-MM-dd")}</span>
        <span>
          {formatDistance(
            children,
            from ?? constructNow(new Date()).setHours(0, 0, 0, 0),
            {
              locale: ja,
              addSuffix: true,
              includeSeconds: false,
            },
          )}
        </span>
      </div>
    </div>
  );
};
