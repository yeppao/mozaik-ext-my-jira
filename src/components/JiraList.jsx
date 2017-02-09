import React, { Component, PropTypes } from 'react';
import reactMixin                      from 'react-mixin';
import { ListenerMixin }               from 'reflux';
import Mozaik                          from 'mozaik/browser';

class JiraList extends Component {
    constructor(props) {
        super(props);
    }

    getApiRequest() {
        const { datas } = this.props;

        return {
            id: 'jira.list',
            params: { datas }
        };
    }

    onApiData(datas) {
        console.log(datas);
    }

    render() {
        return (
            <div>
                <div className="widget__header">
                    Tickets Jira
                    <i className="fa fa-bars" />
                </div>
                <div className="widget__body">
                    <div>OK</div>                    
                </div>
            </div>
        );
    }
}

JiraList.displayName = 'JiraList';

JiraList.propTypes = any;

reactMixin(JiraList.prototype, ListenerMixin);
reactMixin(JiraList.prototype, Mozaik.Mixin.ApiConsumer);

export default JiraList;