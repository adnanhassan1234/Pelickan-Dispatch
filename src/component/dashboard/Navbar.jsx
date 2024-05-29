import { useEffect, useRef, useState } from "react";
import "@/css/navbar.css";
import { useLocation } from "react-router-dom";
import profile from "@/assets/proimg.png";
const Navbar = () => {
  const navBelow = useRef(null);
  const location = useLocation();

  const [isClose, setClose] = useState(null);
  useEffect(() => {
    const nav = navBelow.current;
    if (!nav.classList.contains("navbar_animation--forward")) {
      setTimeout(() => {
        // nav.classList.remove("navbar_animation--backward");
        nav.classList.add("d__none");
      }, 400);
      setClose(null);
    }
  }, [isClose]);

  const onHideBar = () => {
    const nav = navBelow.current;
    if (!nav) return;
    nav.classList.remove("navbar_animation--forward");
    nav.classList.add("navbar_animation--backward");
    setClose(false);
  };
  const onShowBar = () => {
    const nav = navBelow.current;
    if (!nav) return;
    nav.classList.remove("d__none");
    nav.classList.add("navbar_animation--forward");
    nav.classList.remove("navbar_animation--backward");
    setClose(true);
  };

  return (
    <>
      <div className="nav">
        <div>
          <h2>
            {location?.pathname?.split("/")[1] === ""
              ? "dashboard"
              : location?.pathname?.split("/")[1]?.split("-")?.join(" ")}
          </h2>
          <ul onClick={onShowBar}>
            <li>
              <span>2</span>
              <i className="fa-regular fa-bell"></i>
            </li>
            <li>
              <span>5</span>
              <i className="fa-regular fa-calendar"></i>
            </li>
            <li className="navbar__profile">
              <img
                // src={
                //   !data?.profile?.profile_image
                //     ? "@/assets/avatar.svg"
                //     : baseUrl + data?.profile?.profile_image
                // }
                src={profile}
                // alt="Profile_Image"
                style={{ borderRadius: "10%" }}
              />
              <div>
                {/* <p>{data?.profile?.full_name}</p> */}
                {/* <span>{data?.profile?.user_type}</span> */}
                <p>Jawad</p>
                <span>user_type</span>
              </div>
              <i className="fa-solid fa-chevron-down"></i>
            </li>
          </ul>
        </div>
      </div>

      <div ref={navBelow} className="bar-contenter d__none">
        <div className="right-pop">
          <div className="image-data">
            <i onClick={onHideBar} className="fa-solid fa-xmark"></i>
            <div className="pro-img">
              <img src={profile} alt="" />

              <div>full_name</div>
              <p>user_type</p>
            </div>
          </div>
          <hr className="mid" />
          <div className="bar-notifi">
            <div className="noti-title">
              <span>Notifications</span>
              <div className="noti-icon">
                <i className="fa-solid fa-bell"></i>
              </div>
            </div>
            <div className="notifications">
              <div className="noti-box"></div>
              <div className="noti-text">Your subscription expires Today.</div>
              <div className="noti-time">
                <span>6:30</span>
                <span>PM</span>
              </div>
            </div>

            <div className="notifications">
              <div className="noti-box"></div>
              <div className="noti-text">Your subscription expires Today.</div>
              <div className="noti-time">
                <span>6:30</span>
                <span>PM</span>
              </div>
            </div>
            <div className="notifications">
              <div className="noti-box"></div>
              <div className="noti-text">Your subscription expires Today.</div>
              <div className="noti-time">
                <span>6:30</span>
                <span>PM</span>
              </div>
            </div>
            <div className="see-noti">
              <span>See all Notifications</span>
            </div>
            <hr className="mid" />
          </div>
          <div className="bar-notifi">
            <div className="noti-title">
              <span>Messages</span>
              <div className="noti-icon">
                <i className="fa-regular fa-message"></i>
              </div>
            </div>

            <div className="notifications">
              <div className="noti-box"></div>
              <div className="noti-text">
                Your Britannia Private Hire campaign expires in 24 Hours.
              </div>
              <div className="noti-time">
                <span>6:30</span>
                <span>PM</span>
              </div>
            </div>
            <div className="notifications">
              <div className="noti-box"></div>
              <div className="noti-text">Your subscription expires Today.</div>
              <div className="noti-time">
                <span>6:30</span>
                <span>PM</span>
              </div>
            </div>
            <div className="notifications">
              <div className="noti-box"></div>
              <div className="noti-text">Your subscription expires Today.</div>
              <div className="noti-time">
                <span>6:30</span>
                <span>PM</span>
              </div>
            </div>
            <div className="see-noti">
              <span>See all Messages</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
