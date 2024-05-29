import React from "react";
import "./popup.css";

const Permissions = () => {
  return (
    <div className="permissionMainDiv">
      <h3 style={{ marginBottom: "10px" }}>Add new permission:</h3>
      <label className="underlineInTable"></label>
      <div className="userGmailPermissionDiv">
        <label className="permissionLbl">User</label>
        <input type="text" className="permissionInput" />
      </div>
      <div className="userGmailPermissionDiv">
        <label className="permissionLbl">Email</label>
        <input type="gmail" className="permissionInput" />
      </div>
      <div className="PermissionDiv">
        <label className="permissionLbl">Permission</label>
        <div className="checkboxAndValueDiv">
          <input type="checkbox" className="checkboxAndValue" />
          <label>Add</label>
        </div>
        <div className="checkboxAndValueDiv">
          <input type="checkbox" className="checkboxAndValue" />
          <label>Add</label>
        </div>
        <div className="checkboxAndValueDiv">
          <input type="checkbox" className="checkboxAndValue" />
          <label>Add</label>
        </div>
        <div className="checkboxAndValueDiv">
          <input type="checkbox" className="checkboxAndValue" />
          <label>Add</label>
        </div>
      </div>
      <div className="remainPermissionDiv">
        <div className="checkboxAndValueDiv">
          <input type="checkbox" className="checkboxAndValue" />
          <label>Add</label>
        </div>
        <div className="checkboxAndValueDiv">
          <input type="checkbox" className="checkboxAndValue" />
          <label>Add</label>
        </div>
        <div className="checkboxAndValueDiv">
          <input type="checkbox" className="checkboxAndValue" />
          <label>Add</label>
        </div>
        <div className="checkboxAndValueDiv">
          <input type="checkbox" className="checkboxAndValue" />
          <label>Add</label>
        </div>
      </div>
      <div className="permissionBtn">
        <button className="btnDesignDriver">Add</button>
        <button className="btnDesignDriverCancel">Cancel</button>
      </div>
    </div>
  );
};

export default Permissions;
