import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

//import css file


class About extends Component {
    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Something about me
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/32asfQcIWsM"
                            title="ALL IN ONE | Vừa Nhập Học Giả Ngu Giấu Nghề Lại Là Kiếm Thánh Bá Vl | Tóm Tắt Anime | Review Anime"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>

                        </iframe>
                    </div>

                    <div className='content-right'>
                        <p>
                            "Web dinh vl"
                        </p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
