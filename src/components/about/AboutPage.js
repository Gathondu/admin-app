import React, {Component} from 'react';

class AboutPage extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
            </div>
        );
    }
}

export default AboutPage;