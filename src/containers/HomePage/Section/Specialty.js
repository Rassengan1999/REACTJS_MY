import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
//import css file


class Specialty extends Component {
    render() {
        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>

                    <div className='section-header'>
                        <span className='title-section'>Chuyen khoa pho bien</span>
                        <button className='btn-section'>Xem them</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className="bg-image section-specialty " />
                                <div>Benh viem gan</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-specialty" />
                                <div>Benh viem gan</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-specialty" />
                                <div>Benh viem gan</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-specialty" />
                                <div>Benh viem gan</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-specialty" />
                                <div>Benh viem gan</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-specialty" />
                                <div>Benh viem gan</div>
                            </div>

                        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
