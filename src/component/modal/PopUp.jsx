import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {
  AlertError,
  AlertInfo,
  AlertSuccess,
  AlertWarning,
} from "../alert/Alert";
import onResetAlert from "@/utils/resetAlert";
import { useDispatch } from "react-redux";

const PopUp = ({ alert }) => {
  const addAnime = useRef([]);
  const dispatch = useDispatch(false);
  useEffect(() => {
    const toast = addAnime.current;
    let timer = "";
    if (alert.status) {
      timer = setTimeout(() => {
        toast.classList.add("toast_animation--backward");
      }, 6000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  const onClose = () => {
    const toast = addAnime.current;
    if (!toast) return;
    toast.classList.add("toast_animation--backward");
    toast.classList.remove("toast_animation--forward");
    setTimeout(() => {
      onResetAlert(dispatch);
    }, 600);
  };
  return (
    <>
      {alert.status && (
        <div
          style={{
            position: "sticky",
            top: "5px",
            zIndex: "20",
            display: alert.status ? "flex" : "none",
          }}
        >
          <div
            ref={addAnime}
            className="toast_animation--forward alert__toast toast__overflow"
          >
            {(() => {
              switch (alert.type) {
                case "success":
                  return <AlertSuccess msg={alert.msg} onClose={onClose} />;
                case "danger":
                  return <AlertError msg={alert.msg} onClose={onClose} />;
                case "info":
                  return <AlertInfo msg={alert.msg} onClose={onClose} />;
                case "warning":
                  return <AlertWarning msg={alert.msg} onClose={onClose} />;
                default:
                  break;
              }
            })()}
          </div>
        </div>
      )}
    </>
  );
};
PopUp.propTypes = {
  alert: PropTypes.object,
};
export default PopUp;
