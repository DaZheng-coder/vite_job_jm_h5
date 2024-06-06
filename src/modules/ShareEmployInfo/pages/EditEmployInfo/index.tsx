import MCard from "@/components/MCard";
import PageContainer from "@/components/PageContainer";
import { Form, Toast } from "antd-mobile";
import { FC, useState } from "react";
import { EFields } from "../../filedsMap";
import MInput from "@/components/MInput";
import { educationBgs, resignationReasons } from "@/constants";
import { useShareEmployStore } from "@/store";
import "./index.less";
import MInputPicker from "@/components/MInputPicker";
import MDatePicker from "@/components/MDatePicker";
import BottomActionBar from "@/components/BottomActionBar";
import { saveSharePersonInfo } from "@/apis";

const EditEmployInfo: FC = () => {
  const { employInfo } = useShareEmployStore();

  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      await form.validateFields();
    } catch (error) {
      if (error?.errorFields?.length > 0) {
        Toast.show("请填写完整信息");
      }
      return;
    }
    const res = await saveSharePersonInfo(form.getFieldsValue());
  };

  return (
    <PageContainer
      title="共享用工信息"
      className="bg-[#F7F8FC]"
      bottomBarProps={{ onNext: handleSubmit }}
    >
      <Form
        initialValues={employInfo}
        name="employInfo"
        layout="horizontal"
        className="pt-[20px] form_c_wrap px-[28px]"
        form={form}
        onValuesChange={(vahneged) => {
          console.log("*** vahneged", vahneged);
        }}
      >
        <MCard title="实名信息" className="mt-0">
          <MInput
            formProps={{
              label: "人员姓名",
              name: EFields.username,
            }}
            inputProps={{ placeholder: "请输入" }}
          />
          <MInput
            formProps={{
              label: "身份证号码",
              name: EFields.idCard,
            }}
            inputProps={{ placeholder: "请输入" }}
          />
          <MInput
            formProps={{
              label: "联系人手机号码",
              name: EFields.phone,
            }}
            inputProps={{ placeholder: "请输入" }}
          />
        </MCard>
        <MCard title="共享用工信息">
          <MInputPicker
            label="学历"
            name={EFields.educationBg}
            form={form}
            columns={[educationBgs]}
            getValue={(v) => v[0]}
          />
          <MInput
            formProps={{
              label: "专业",
              name: EFields.major,
            }}
            inputProps={{ placeholder: "请输入" }}
          />
          <MInput
            formProps={{
              label: "岗位名称",
              name: EFields.jobTitle,
            }}
            inputProps={{ placeholder: "请输入" }}
          />
          <MInput
            formProps={{
              label: "特长/所持技能证书",
              name: EFields.specialties,
            }}
            inputProps={{ placeholder: "请输入" }}
          />
          <MDatePicker name={EFields.resignationTime} label="离职时间" />
          <MInputPicker
            name={EFields.resignationReason}
            label="离职原因"
            form={form}
            columns={[resignationReasons]}
            getValue={(v) => v[0]}
          />
        </MCard>
      </Form>
    </PageContainer>
  );
};

export default EditEmployInfo;
