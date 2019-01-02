import React from 'react';
import PropTypes from 'prop-types';

const AboutPage = ({title}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
        </div>
    );
};

AboutPage.propTypes = {
  title: PropTypes.string.isRequired
};

AboutPage.defaultProps = {
  title: 'About'
};

export default AboutPage;