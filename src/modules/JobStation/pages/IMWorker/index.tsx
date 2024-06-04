import JSGuide from "@/components/JSGuide";
import { Popup, Tabs } from "antd-mobile";
import { FC, useState } from "react";
import "./index.less";
import SvgIcon from "@/components/SvgIcon";
import JSJobCard from "@/components/JSJobCard";
import SelectPage from "@/components/SelectPage";

const IMWorker: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div>
      <JSGuide />
      <div className="px-[28px]">
        <div className="flex text-[26px] items-end">
          <div className="mr-[28px] text-[28px] font-bold">推荐</div>
          <div className="mr-[28px] text-[#999]">最新</div>
          <div className="mr-[28px] text-[#999]">附近</div>
          <div className="mr-[28px] text-[#999]">急招</div>
          <div className="mr-[170px] text-[#999]">月结专区</div>
          <div className="flex items-center" onClick={() => setVisible(true)}>
            <SvgIcon className="w-[28px] h-[28px]" name="js_filter" />
            <span>筛选</span>
          </div>
        </div>
        <JSJobCard />
      </div>
      {visible && (
        <Popup
          visible={visible}
          onMaskClick={() => {
            setVisible(false);
          }}
          position="right"
          bodyStyle={{ width: "100%" }}
        >
          <SelectPage
            back={() => setVisible(false)}
            title="筛选"
            list={[
              {
                key: 1,
                title: "工种类型",
                list: [
                  {
                    key: 2,
                    title: "薪资待遇",
                    list: [{ key: 21, title: "1薪资待遇" }],
                  },
                  { key: 3, title: "薪资待遇2" },
                ],
              },
              { key: 2, title: "薪资待遇" },
              { key: 3, title: "结算方式" },
            ]}
          />
        </Popup>
      )}
    </div>
  );
};

export default IMWorker;
