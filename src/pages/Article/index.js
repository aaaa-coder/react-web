import "./index.scss";
import { Breadcrumb, Radio, Select, DatePicker, Button } from "antd";
import { useState } from "react";
import { useChannel } from "@/hooks/useChannel";
import { getArticleList } from "@/apis/article";

const Article = () => {
  const [searchConditions, setSearchConditions] = useState({
    status: 0,
    channel_id: "",
  });

  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 10,
    total: 0,
  });
  const { Option } = Select;

  const { RangePicker } = DatePicker;

  let channelList = useChannel();

  // -------------- 查询功能 -------------------

  const handleChange = (date, dateString) => {
    setSearchConditions({
      ...searchConditions,
      begin_pubdate: dateString[0],
      end_pubdate: dateString[1],
    });
  };
  const handleSearch = async () => {
    // console.log(searchConditions);
    const { data } = await getArticleList({
      ...searchConditions,
      ...pagination,
    });

    console.log(data);
  };
  return (
    <div className="article_wrapper">
      <Breadcrumb
        items={[
          {
            title: <a href="/home">首页</a>,
          },
          {
            title: "文章管理",
          },
        ]}
      />

      <div className="article_content">
        <header className="article_search">
          <div className="article_status">
            <span>状态：</span>
            <Radio.Group value={searchConditions.status}>
              <Radio value={0}>全部</Radio>
              <Radio value={1}>草稿</Radio>
              <Radio value={2}>审核通过</Radio>
            </Radio.Group>
          </div>
          <div className="channel_wrapper">
            频道：
            <Select style={{ width: 200 }} defaultValue="">
              <Option value="">全部</Option>
              {channelList.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="date_wrapper">
            日期：
            <RangePicker onChange={handleChange} />
          </div>

          <Button className="search_btn" type="primary" onClick={handleSearch}>
            查询
          </Button>
        </header>
      </div>
    </div>
  );
};

export default Article;
