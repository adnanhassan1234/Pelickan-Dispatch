import ShowVehicle from "@/component/home/ShowVehicle";
import BarGraphHome from "@/component/home/BarGraphHome";
import MapHome from "@/component/home/MapHome";
import DoughnutMapHome from "@/component/home/DoughnutMapHome";
import DashNav from "@/component/home/DashNav";
const Dashboard = () => {
  return (
    <div className="dashboard--container__ms ">
      <div className="dash--nav__ms dis--flx__ms">
        <DashNav />
      </div>
      <div className="mid--content__ms dis--flx__ms">
        <div>
          <ShowVehicle
            title="Total Number Of Vehicles"
            number={436}
            imageSrc="src/assets/smallcar.png"
          />
          <div>
            <ShowVehicle
              title="Vehicles Signed On"
              number={49}
              imageSrc="src/assets/orangemen.png"
            />
          </div>
        </div>
        <div className="right--graph__ms">
          <BarGraphHome />
        </div>
      </div>
      <div className="dash--down__ms dis--flx__ms ">
        <MapHome />

        <div className="bar--graph__ms">
          <DoughnutMapHome />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
