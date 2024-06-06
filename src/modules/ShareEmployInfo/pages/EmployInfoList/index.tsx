import { Dropdown, Radio, SearchBar } from "antd-mobile";
import { FC, useEffect, useState } from "react";
import "./index.less";
import EmployCardItem from "@/components/EmployCardItem";
import { getShareEmployInfoList } from "@/apis";

const EmployInfoList: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [data, setData] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const res = await getShareEmployInfoList({
      page,
      pageSize,
    });
    setData(res?.data?.resultData?.data?.data?.pageBean);
  };

  console.log("*** data", data);

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
          共 <span className="text-[#ffa01c]">{data?.total || 0}</span> 条信息
        </div>
        {data.list.map((item) => (
          <EmployCardItem {...item} />
        ))}
      </div>
    </div>
  );
};

export default EmployInfoList;
