import {
  Account_icon,
  Dispatch_icon,
  Driver_icon,
  Mobile_icon,
  SystemSetting_icon,
  VehicleDis_icon,
} from "@/assets/svg/Svg";

function SystemParameter() {
  const onCheckDropDown = (e) => {
    let target = e.currentTarget.parentElement;
    // const ref = scenarioRef.current.querySelector("ul");
    // if (ref) ref.classList.add("hidden");
    target.querySelector("ul").classList.toggle("hidden");
    target.querySelector("i").classList.toggle("rot__icon");
    // target.querySelector(".plus__icon").classList.toggle("hidden");
  };
  const systemParametersData = [
    {
      parent: { value: "Despatch Parameters", icon: <Dispatch_icon /> },
      children: ["Despatch Priority", "Pre-Allocated Job Checks"],
    },
    {
      parent: { value: "Driver Parameters", icon: <Driver_icon /> },
      children: [
        "Driver Attributes",
        "Statement Styles",
        "Driver Dashboard",
        "Driver Notification",
        "Driver Tips",
      ],
    },
    {
      parent: { value: "Vehicle Parameters", icon: <VehicleDis_icon /> },
      children: ["Vehicle Attributes"],
    },
    {
      parent: { value: "PDA Parameters", icon: <Mobile_icon /> },
      children: [
        "Mail Option",
        "Pre-POB Problem",
        "Post-POM Problem",
        "Job Offer Parameters",
      ],
    },
    {
      parent: { value: "Accounts Parameters", icon: <Account_icon /> },
      children: [
        "Job Type Name",
        "Job Type Alias",
        "Charge Name",
        "Charge Unit",
        "Booking Reference",
        "Company Details",
        "Invoice Styles",
        "Wait and Return Parameters",
        "Credit Card E0Commerce Gateway",
      ],
    },
  ];
  return (
    <div className="system--left__para">
      <div className="main--word__parms">
        <div className="upper--parms__system1">
          <SystemSetting_icon />
          <p>System Parameters</p>
          <i className="fa-solid fa-play ico rot__icon"></i>
        </div>
        {systemParametersData.map((itm, index) => (
          <div key={index} className="down--parms__text">
            <div className="upper--parms__system">
              <div className="upper--parms__system1" onClick={onCheckDropDown}>
                {itm.parent.icon}
                <p>{itm.parent.value}</p>
                <i className="fa-solid fa-play ico"></i>
              </div>
              <ul className="hidden">
                {itm.children.map((item, indx) => (
                  <li key={indx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SystemParameter;
