import {
  AlertSuccess_icon,
  AlertWarning_icon,
  AlertInfo_icon,
  AlertError_icon,
  Close_icon,
} from "@/assets/svg/Svg";
import PropTypes from "prop-types";

export function AlertSuccess({ msg, onClose }) {
  return (
    <div className="alert__bg alert__success align-center gap-1">
      <AlertSuccess_icon />
      <p className="alert__font"> {msg}</p>
      <div className="alert__close" onClick={onClose}>
        <Close_icon />
      </div>
    </div>
  );
}

export function AlertWarning({ msg, onClose }) {
  return (
    <div className="alert__bg alert__warning align-center gap-1">
      <AlertWarning_icon />
      <p className="alert__font">{msg}</p>
      <div className="alert__close" onClick={onClose}>
        <Close_icon />
      </div>
    </div>
  );
}

export function AlertInfo({ msg, onClose }) {
  return (
    <div className="alert__bg alert__info align-center gap-1">
      <AlertInfo_icon />
      <p className="alert__font">{msg}</p>
      <div className="alert__close" onClick={onClose}>
        <Close_icon />
      </div>
    </div>
  );
}

export function AlertError({ msg, onClose }) {
  return (
    <div className="alert__bg alert__error align-center gap-1">
      <AlertError_icon />
      <p className="alert__font">{msg}</p>
      <div className="alert__close" onClick={onClose}>
        <Close_icon />
      </div>
    </div>
  );
}
export function AlertInfoModal({ data, onClose }) {
  return (
    <div className="alert__modal alert__info align-center gap-1">
      <div className="alert__modal--top">
        <div className="alert__modal--middle">
          <AlertInfo_icon />
          <p className="alert__font">Info</p>
        </div>
        <div className="icon_hover" onClick={onClose}>
          <Close_icon />
        </div>
      </div>
      <div className="alert__data">
        <p className="example__text--second">{data.title}</p>
        <ul>
          {data.data.map((itm, ind) => (
            <li key={ind}>{itm.info}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

AlertInfoModal.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
};
AlertError.propTypes = {
  msg: PropTypes.string,
  onClose: PropTypes.func,
};
AlertInfo.propTypes = {
  msg: PropTypes.string,
  onClose: PropTypes.func,
};
AlertSuccess.propTypes = {
  msg: PropTypes.string,
  onClose: PropTypes.func,
};
AlertWarning.propTypes = {
  msg: PropTypes.string,
  onClose: PropTypes.func,
};
