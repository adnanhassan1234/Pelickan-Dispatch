import PropTypes from "prop-types";

const McalculatorModal = ({ setModal, getModal }) => {
  const { status, data } = getModal;
  return (
    <div id="myModal" className={`${status ? "" : "hidden"} modal`}>
      <div className="milage-modal-contenter">
        <div className="m-m-content">
          <span
            className="m-close"
            onClick={() => {
              setModal({
                data: {},
                status: false,
              });
            }}
          >
            &times;
          </span>
          <div className="m-title">
            <span>
              You can add {data.title} <span>({data.des})</span> mile wise fare
              using below fields
            </span>
          </div>
          <div className="miles">
            <div className="all-miles">
              <span>From Miles</span>
              <br />
              <div className="fmiles">
                <input type="text" />
              </div>
            </div>
            <div className="all-miles">
              <span>To Miles</span>
              <br />
              <div className="fmiles">
                <input type="text" />
              </div>
            </div>
            <div className="all-miles">
              <span>Fare</span>
              <br />
              <div className="fmiles">
                <input type="text" />
              </div>
            </div>
            <div className="all-miles">
              <span></span>
              <br />
              <div className="f-btn">
                <button>ADD FARE</button>
              </div>
            </div>
          </div>
          <div className="miles-table">
            <table>
              <tr>
                <th>ID</th>
                <th>From Miles</th>
                <th>To Miles</th>
                <th>Fare</th>
                <th colSpan="2">Actions</th>
              </tr>
              <tr>
                <td>7356012</td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <div className="uu-btn">
                    <div className="update-btn .f-btn">
                      <button>Update</button>
                    </div>
                    <div className="x-btn">
                      <button>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="uu-btn">
                    <div className="dle-btn">
                      <button>
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>7356012</td>
                <td>73.025</td>
                <td>73.0</td>
                <td>735.23</td>
                <td>
                  <div className="uu-btn">
                    <div className="ed-btn">
                      <button>
                        <i className="fa-solid fa-pencil"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="uu-btn">
                    <div className="dle-btn">
                      <button>
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>7356012</td>
                <td>73.025</td>
                <td>73.0</td>
                <td>735.23</td>
                <td>
                  <div className="uu-btn">
                    <div className="ed-btn">
                      <button>
                        <i className="fa-solid fa-pencil"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="uu-btn">
                    <div className="dle-btn">
                      <button>
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>7356012</td>
                <td>73.025</td>
                <td>73.0</td>
                <td>735.23</td>
                <td>
                  <div className="uu-btn">
                    <div className="ed-btn">
                      <button>
                        <i className="fa-solid fa-pencil"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="uu-btn">
                    <div className="dle-btn">
                      <button>
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
McalculatorModal.propTypes = {
  getModal: PropTypes.object,
  setModal: PropTypes.any,
};
export default McalculatorModal;
