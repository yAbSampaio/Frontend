import React from "react";
import {
  CButton,
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardSubtitle,
  CCardText,
  CCardHeader,
  CImg,
} from "@coreui/react";
import HomeVideos from "../containers/homeVideos";
// import { Container } from './styles';

const youtube = ({ history }) => {
  const handleClick = () => {
    history.push("/view");
  };

  return (
    <div>
      <h1>Home</h1>
      <HomeVideos />
    </div>
  );
};

export default youtube;
