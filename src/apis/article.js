import { service } from "@/utils";

const getArticleList = (params) => {
  return service.get("/mp/articles", { params });
};

export { getArticleList };
