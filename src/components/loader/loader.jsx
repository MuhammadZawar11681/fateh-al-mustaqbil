import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { PuffLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = ({ loading }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <PuffLoader color="#f65934" loading={loading} css={override} size={150} />
    </div>
  );
};
Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loader;
