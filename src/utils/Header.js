import React, { Component } from 'react';
import Icon from 'utils/Icon';
import Routes from 'config/Routes';

class Header extends Component {

    getPageName = (pathname) => {
        if(pathname === Routes.LandingPage){
            return 'Dashboard'
        }else if(pathname === Routes.Calender){
            return 'Calender'
        }else if(pathname === Routes.Inbox){
            return 'Inbox'
        }else if(pathname === Routes.Invoice){
            return 'Invoicing'
        }else if(pathname === Routes.Lab_Experiment){
            return 'Lab / Experimental'
        }else{
            return 'Dashboard'
        }
    }

    render() {
        const {pathname} = this.props.location;
        return (
            <div className="header-style-container d-flex">
                <div className="part-one d-flex align-items-center justify-content-center">
                    <Icon className="icon-progress" icon="ICON_HOME"/>
                </div>
                <div className="d-flex align-items-center justify-content-between part-two">
                    <div className="title-text">
                        {/* Dashboard */}
                        {this.getPageName(pathname)}
                    </div>
                    <div className="select-width">
                        {/* <select
                            name="Language"
                            className="form-control"
                        >
                            <option value="English">English</option>
                        </select> */}
                        <div className="">
                            <select className="form-control font-size-14" name="Language">
                                <option value="English">English</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Header;
