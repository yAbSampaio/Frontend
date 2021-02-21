//REACT
import React from "react";
import { useHistory } from "react-router-dom";
//REDUX
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../store/actions/index";
//CoreUI
import {
  CButton,
  CLink,
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const TheHeaderDropdown = ({ token, reset }) => {
  let history = useHistory();

  const handleClick = (route) => {
    history.push("/" + route);
  };

  const Logout = () => {
    reset();
    history.push("/login");
  };

  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={
              "http://localhost:3334/media/image/93e124d9-e046-479d-a739-59b8c7668616.png"
            }
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" className="text-center">
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem onClick={() => handleClick("profile")}>
          <CIcon name="cil-user" className="mfe-2" />
          &nbsp;Perfil
        </CDropdownItem>
        <CDropdownItem onClick={() => handleClick("channel")}>
          <CIcon name="cilTv" className="mfe-2" />
          Canal
        </CDropdownItem>
        <CDropdownItem onClick={() => handleClick("studio")}>
          <CIcon name="cil-settings" className="mfe-2" />
          Studio
        </CDropdownItem>
        <CDropdownItem onClick={() => handleClick("statistics")}>
          <CIcon name="cilChart" className="mfe-2" />
          Estatisticas do Canal
        </CDropdownItem>
        {/* <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" />
          Updates
          <CBadge color="info" className="mfs-auto">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" />
          Messages
          <CBadge color="success" className="mfs-auto">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-task" className="mfe-2" />
          Tasks
          <CBadge color="danger" className="mfs-auto">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-comment-square" className="mfe-2" />
          Comments
          <CBadge color="warning" className="mfs-auto">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Settings</strong>
        </CDropdownItem>

        <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" />
          Payments
          <CBadge color="secondary" className="mfs-auto">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-file" className="mfe-2" />
          Projects
          <CBadge color="primary" className="mfs-auto">
            42
          </CBadge>
        </CDropdownItem> */}
        <CDropdownItem divider />
        <CDropdownItem onClick={() => Logout()}>
          <CIcon name="cilAccountLogout" className="mfe-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

const mapStateToProps = (state) => ({ token: state.token });
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TheHeaderDropdown);
