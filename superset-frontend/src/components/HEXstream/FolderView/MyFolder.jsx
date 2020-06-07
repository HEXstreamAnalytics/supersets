import React from 'react';
import { TreeList, Column, Selection, ValidationRule, Lookup } from 'devextreme-react/tree-list';
import { Template } from 'devextreme-react/core/template';
import { data } from './data.jsx';
import NameCell from './nameCell';
import ActionCell from './actionCell';
import './MyFolder.css';

import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as Actions from '../../../messageToasts/actions';

const expandedRowKeys = [1];

class MyFolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.folderviewData,
      lookupData: {
        store: this.props.folderviewData,
        sort: 'name'
      }
    };
  }

  async componentDidMount() {
    this.props.getFolderviewData();

    await setTimeout(() => {
      console.log("Mounted!");
    }, 1000);
  }

  async componentDidUpdate(prevProps, prevState) {
    let newData = await this.props.folderviewData;
    let oldData = await prevProps.folderviewData;

    if (JSON.stringify(newData) != JSON.stringify(oldData)) {
      this.setState({
        data: newData,
        lookupData: {
          store: newData,
          sort: 'name'
        }
      });
    }
  }

  render() {

    const { data, lookupData } = this.state;

    return (
      <div id="tree-list-demo">
        <TreeList
          dataSource={data}
          columnAutoWidth={true}
          showRowLines={true}
          defaultExpandedRowKeys={expandedRowKeys}
          keyExpr="ID"
          parentIdExpr="Head_ID"
        >
          <Selection mode="single" />
          <Column dataField="name" caption="Name" allowSorting={true} cellTemplate="nameCell">
            <ValidationRule type="required" />
          </Column>
          <Column visible={false} dataField="Head_ID">
            <Lookup dataSource={lookupData} valueExpr="ID" displayExpr="name" />
            <ValidationRule type="required" />
          </Column>
          <Column  dataField="creator" caption="Creator">
            <ValidationRule type="required" />
          </Column>
          <Column  dataField="modified" dataType="date" caption="Modified">
            <ValidationRule type="required" />
          </Column>
          <Column caption="Quick Actions" width={200} cellTemplate="actionCell">
            <ValidationRule type="required" />
          </Column>

          <Template name="nameCell" render={NameCell} />
          <Template name="actionCell" render={ActionCell} />
        </TreeList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    folderviewData: state.messageToasts.folderviewData
  };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      getFolderviewData: Actions.getFolderviewData
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(MyFolder);
