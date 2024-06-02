import { FC } from "react";
import "./index.less";
import { Form, Input, InputProps, FormItemProps } from "antd-mobile";

const MInput: FC<{
  inputProps: InputProps;
  formProps: FormItemProps;
}> = ({ inputProps, formProps }) => {
  return (
    <Form.Item
      {...formProps}
      rules={[
        ...(formProps.rules || []),
        { required: true, message: formProps.label + "不能为空" },
      ]}
      className={"antdm_c_input " + (formProps.className || "")}
    >
      <Input {...inputProps} />
    </Form.Item>
  );
};

export default MInput;
