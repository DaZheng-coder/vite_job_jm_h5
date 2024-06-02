import { useMemo } from "react";
import "./index.less";

interface SvgIconProps {
  prefix?: string;
  name: string;
  className?: string;
}

const SvgIcon = (props: SvgIconProps) => {
  const { prefix = "icon", name, className } = props;
  const symbolId = useMemo(() => `#${prefix}-${name}`, [prefix, name]);
  return (
    <svg className={`svg_icon ${className}`} aria-hidden="true">
      <use href={symbolId} />
    </svg>
  );
};
export default SvgIcon;
