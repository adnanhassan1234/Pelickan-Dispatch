import "@/App.scss";
import { Route, Routes } from "react-router-dom";
import Register from "@/views/auth/Register";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Forget from "./views/auth/Forget";
import EmailVerification from "./views/auth/EmailVerification";
import ConfirmPassword from "./views/auth/ConfirmPassword";
import PopUp from "./component/modal/PopUp";
import Drivers from "./views/Drivers";
import DocUpload from "./views/DocUpload";
import Login from "./views/auth/Login";
import Dashboard from "./views/Dashboard";
import EmailValidation from "./views/auth/EmailValidation";
import { onGetToken } from "./utils/useToken";
import { useEffect } from "react";
import { onAuthUser, onResetModal } from "./actions";
import ScreenSpinner from "./component/spinners/ScreenSpinner";
import Pricing from "./views/Pricing";
import MilageCalculator from "./views/MilageCalculator";
import Vehicles from "./views/Vehicles";
import Address from "./views/Address";
import SystemParameters from "./views/SystemParameters";
import PaymentSetting from "./views/PaymentSetting";
import Bookings from "./views/Bookings";
import MemberDiscount from "./views/MemberDiscount";
import Members from "./views/Members";
import DropOffCharges from "./views/DropOffCharges";
import PickupCharges from "./views/PickupCharges";
import DayHirePricing from "./views/DayHirePricing";
import Privileges from "./views/Privileges";
import Discount from "./views/Discount";
import Operator from "./views/Operator";
import Fleet from "./views/Fleet";
import DriversDoc from "./views/DriversDoc";
import Sidebar from "./component/dashboard/Sidebar";
import Schedule from "./views/auth/schedule/Schedule";
import CallBooker from "./views/CallBooker";
import Formulas from "./views/Formulas";
import Navbar from "./component/dashboard/Navbar";
import Logs from "./views/Logs";
import Shortcuts from "./views/Shortcuts";
import Zone from "./views/Zone";
import Matrices from "./views/Matrices";
import Queues from "./views/Queues";
import Mobiles from "./views/Mobiles";
import Account from "./views/Account";
import LostFound from "./views/LostFound";
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

function App() {
  // let router = [];
  const alert = useSelector((state) => state.alert);
  const redirect = useSelector((state) => state.redirect.payload);
  const { screenLoading } = useSelector((state) => state.auth);

  const token = onGetToken();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!onGetToken()) return;
    dispatch(onAuthUser());
  }, [dispatch]);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (!body) {
      return;
    }

    if (screenLoading) {
      body.style.overflow = "hidden";
      return;
    }

    body.style.overflow = "auto";
  }, [screenLoading]);

  const modal = useSelector((state) => state.modal);

  useEffect(() => {
    const handleMouseDown = (e) => {
      const cPosition = modal?.cPosition;

      if (e.detail !== 2) {
        if (cPosition > 0) {
          dispatch(onResetModal());
        }
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [modal, dispatch]);

  return (
    <div className="main">
      {/* <ScreenSpinner state={screenLoading} /> */}
      <PopUp alert={alert?.payload || {}} />
      {!token ? (
        <Routes>
          <Route path="/" element={<Login url={redirect} />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/register" element={<Register url={redirect} />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/reset-password" element={<ConfirmPassword />} />
          <Route path="/email-verified" element={<EmailValidation />} />
        </Routes>
      ) : (
        <div className="ml__responsive">
          <Sidebar />
          {/* <div style={{ position: "relative" }}> */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/upload" element={<DocUpload />} />
            <Route path="/drivers" element={<DriversDoc />} />
            <Route path="/driver-documents" element={<Drivers />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/milage-calculator" element={<MilageCalculator />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/fleets" element={<Fleet />} />
            <Route path="/address" element={<Address />} />
            <Route path="/operators" element={<Operator />} />
            <Route path="/discount" element={<Discount />} />
            <Route path="/privileges" element={<Privileges />} />
            <Route path="/day-hire-pricing" element={<DayHirePricing />} />
            <Route path="/pickup-charges" element={<PickupCharges />} />
            <Route path="/drop-off-charges" element={<DropOffCharges />} />
            <Route path="/members" element={<Members />} />
            <Route path="/member-discount" element={<MemberDiscount />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/payment-setting" element={<PaymentSetting />} />
            <Route path="/system-parameters" element={<SystemParameters />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/call-booker" element={<CallBooker />} />
            <Route path="/formulas" element={<Formulas />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/account" element={<Account />} />
            <Route path="/zone" element={<Zone />} />
            <Route path="/mobiles" element={<Mobiles />} />
            <Route path="/shortcuts" element={<Shortcuts />} />
            <Route path="/matrices" element={<Matrices />} />
            <Route path="/queues" element={<Queues />} />
            <Route path="/lost-and-found" element={<LostFound />} />
          </Routes>
          {/* </div> */}
        </div>
      )}
    </div>
  );
}

export default App;
