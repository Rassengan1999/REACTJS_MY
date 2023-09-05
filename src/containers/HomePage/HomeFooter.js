import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

//import css file


class HomeFooter extends Component {
    render() {
        return (
            <div className='home-footer'>
                <p>&copy; 2023 Marketing With Mr.Vux <a target="_blank" href='https://github.com/Rassengan1999'>&#8594;More information &#8592;</a></p>
            </div>
        );


    }

}


const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
