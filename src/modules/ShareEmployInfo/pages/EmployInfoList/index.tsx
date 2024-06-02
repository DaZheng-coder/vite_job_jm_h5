import { Dropdown, Radio, SearchBar } from "antd-mobile";
import { FC } from "react";
import "./index.less";
import EmployCardItem from "@/components/EmployCardItem";

const EmployInfoList: FC = () => {
  return (
    <div className="bg-[#f5f5f5] h-full">
      <div className="fixed w-full bg-white">
        <div className="p-[28px] h-[136px]">
          <SearchBar
            placeholder="请输入内容"
            showCancelButton
            onSearch={(val) => {}}
            className="m_search_bar"
          />
        </div>
        <div className="py-[14px] px-[28px] flex justify-between h-[70px]">
          <div className="text-[30px] font-medium">共享信息</div>
          <Dropdown>
            <Dropdown.Item
              className="m_dropdown_list"
              key="sorter"
              title="学历"
            >
              <div style={{ padding: 12 }}>
                排序内容
                <br />
                排序内容
                <br />
                排序内容
                <br />
                排序内容
                <br />
              </div>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <div className="pt-[206px] px-[28px]">
        <div className="text-[28px] font-medium py-[30px]">
          共 <span className="text-[#ffa01c]">2345</span> 条信息
        </div>
        <EmployCardItem />
      </div>
    </div>
  );
};

export default EmployInfoList;
