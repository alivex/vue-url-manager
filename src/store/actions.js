import UrlService from "@/utils/url.service";
import { Message } from "element-ui";

let actions = {
  manageURL({ commit }, data) {
    commit("MANAGE_LOADING", true);
    UrlService.create(data)
      .then(response => {
        commit("MANAGE_URL", response.data);
        Message({
          message: "Created Successfully",
          type: "success",
          duration: 5 * 1000
        });
        commit("MANAGE_LOADING", false);
        // console.log(response.data);
      })
      .catch(error => {
        Message({
          message: error.message || "error",
          type: "error",
          duration: 5 * 1000
        });
        commit("MANAGE_LOADING", false);
        console.log(error.message);
      });
  }
};
export default actions;
