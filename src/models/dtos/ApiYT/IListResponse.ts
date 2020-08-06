import IMovie from "../../entities/IMovie";

interface IListResponse {
  kind: string;
  etag: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<IMovie>;
}

export default IListResponse;
