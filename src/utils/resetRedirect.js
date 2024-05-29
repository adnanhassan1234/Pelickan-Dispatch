import { removeRedirectAction } from "@/actions";

export default function onResetAlert(dispatch) {
  dispatch(removeRedirectAction());
}
