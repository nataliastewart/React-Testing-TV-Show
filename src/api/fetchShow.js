import { axios } from "axios";

export default function fetchShow() {
  axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      console.log("APP-RES.DATA", res.data);
      setShow(res.data);
      setSeasons(formatSeasons(res.data._embedded.episodes));
    });
}
