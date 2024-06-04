import { NavBar, SearchBar } from "antd-mobile";
import { DeleteOutline, SearchOutline } from "antd-mobile-icons";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./index.less";
import SearchEmpty from "@assets/js_search_empty.png";
import JSJobCard from "@/components/JSJobCard";

const SearchPage: FC = () => {
  const navigate = useNavigate();
  const renderUnStartSearch = () => {
    return (
      <>
        <div className="p-[28px]">
          <div className="flex pb-[40px] items-center justify-between text-[30px] font-bold">
            <span>历史记录</span>
            <DeleteOutline className="!text-[40px]" />
          </div>
          <div>
            <div className="rounded-[6px]  bg-[#f5f5f5] min-w-[120px] p-[8px] text-[24px] inline-block text-center">
              售货员
            </div>
          </div>
        </div>
        <div className="p-[28px] pt-[56px]">
          <div className="flex pb-[40px] items-center justify-between text-[30px] font-bold">
            <span>热门推荐</span>
          </div>
          <div>
            <div className="rounded-[6px] bg-[#f5f5f5] min-w-[120px] p-[8px] text-[24px] inline-block text-center">
              <SearchOutline />
              <span className="pl-[10px]">传单派发</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  const renderEmptySearch = () => {
    return (
      <div className="flex-1 flex justify-center items-center">
        <img className="w-[400px] h-[268px]" src={SearchEmpty} alt="" />
      </div>
    );
  };

  const renderSearchResult = () => {
    return (
      <div className="p-[28px]">
        <div className="text-[28px]">
          共搜索到 <span className="text-[#2a57c9]">25</span> 条结果
        </div>
        <div>
          <JSJobCard />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <NavBar onBack={() => history.back()}>搜索</NavBar>
      <div className="p-[28px]">
        <SearchBar className="js_search_bar" placeholder="输入工作/工种名称" />
      </div>
      {renderSearchResult()}
    </div>
  );
};

export default SearchPage;
