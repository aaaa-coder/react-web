import { getChannelList } from "@/apis/publish";
import { useEffect, useState } from "react";

const useChannel = () => {
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    (async function getChannel() {
      const { data } = await getChannelList();
      setChannelList(data.channels);
    })();
  }, []);

  return channelList;
};

export { useChannel };
