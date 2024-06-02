import { FC, useMemo, useState } from "react";
import MInput from "../MInput";
import { EFields } from "@/modules/ShareEmployInfo/filedsMap";
import { useShareEmployStore } from "@/store";
import { Picker } from "antd-mobile";
import { FormInstance } from "antd-mobile/es/components/form";
import { RightOutline } from "antd-mobile-icons";
import { PickerColumnItem } from "antd-mobile/es/components/picker-view";
import { getKeyValueMap } from "@/utils";
import "./index.less";

const MInputPicker: FC<{
  name: EFields;
  label: string;
  form: FormInstance;
  columns: PickerColumnItem[][];
  getValue: (v: any[]) => any;
}> = ({ name, form, label, columns, getValue }) => {
  const { employInfo, updateEmployInfo } = useShareEmployStore();
  const [eduBgVisible, setEduBgVisible] = useState<boolean>(false);
  const keyMap = useMemo(() => getKeyValueMap(columns), [columns]);
  return (
    <>
      <MInput
        formProps={{
          label: label,
          name,
          extra: (
            <div
              className="flex items-center"
              onClick={() => setEduBgVisible(true)}
            >
              {employInfo[name] ? (
                <span className="text-[28px] text-[#000]">
                  {keyMap.get(employInfo[name])}
                </span>
              ) : (
                <>
                  <span className="text-[28px]">请选择</span>
                  <RightOutline />
                </>
              )}
            </div>
          ),
        }}
        inputProps={{
          placeholder: "请输入",
          className: "m_input_picker",
        }}
      />
      <Picker
        columns={columns}
        visible={eduBgVisible}
        onClose={() => {
          setEduBgVisible(false);
        }}
        value={[employInfo[EFields.educationBg]]}
        onConfirm={(v) => {
          const newData = {
            [name]: getValue(v),
          };
          updateEmployInfo(newData);
          form.setFieldsValue(newData);
        }}
      />
    </>
  );
};

export default MInputPicker;
