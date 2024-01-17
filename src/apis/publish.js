import { service } from "@/utils";

const getChannelList = () => {
  return service.get("/channels");
};

const addArticle = (data) => {
  return service.post("/mp/articles", data);
};

export { getChannelList, addArticle };
