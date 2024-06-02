import {
  PickerColumn,
  PickerColumnItem,
} from "antd-mobile/es/components/picker-view";
import { isArray } from "lodash";

export const getKeyValueMap = (columns: PickerColumnItem[][]) => {
  const map = new Map();

  const inset = (c) => {
    if (isArray(c)) {
      c.forEach((cc) => inset(cc));
    } else {
      map.set(c.value, c.label);
    }
  };
  columns.length && columns.forEach((c) => inset(c));
  return map;
};
