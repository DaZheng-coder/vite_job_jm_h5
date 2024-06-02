import { DatePicker, DatePickerRef, Form } from "antd-mobile";
import dayjs from "dayjs";
import { FC, RefObject } from "react";
import "./index.less";

const MDatePicker: FC<{
  name: string;
  label: string;
}> = ({ name, label }) => {
  return (
    <Form.Item
      name={name}
      className="m_date_picker"
      label={label}
      rules={[{ required: true, message: label + "不能为空" }]}
      trigger="onConfirm"
      onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
        datePickerRef.current?.open();
      }}
    >
      <DatePicker>
        {(value) => (value ? dayjs(value).format("YYYY-MM-DD") : "请选择")}
      </DatePicker>
    </Form.Item>
  );
};

export default MDatePicker;
