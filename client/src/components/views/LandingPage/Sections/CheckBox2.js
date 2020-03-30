import React, { useState } from 'react';
import { Checkbox, Collapse } from 'antd';

const { Panel } = Collapse;
const category = [
  {
    _id: 0,
    name: 'Any'
  },
  {
    _id: 1,
    name: 'ATK'
  },
  {
    _id: 2,
    name: 'Aksesoris'
  },
  {
    _id: 3,
    name: 'Barang Elektronik'
  },
  {
    _id: 4,
    name: 'Pakaian'
  },
  {
    _id: 5,
    name: 'Kunci'
  },
  {
    _id: 6,
    name: 'lainnya'
  }
];

function CheckBox2(props) {
  const [Checked, setChecked] = useState([]);

  const handleToggle = value => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(newChecked);
    //update this checked information into Parent Component
  };

  const renderCheckboxLists = () =>
    category.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handleToggle(value._id)}
          type="checkbox"
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        &nbsp;&nbsp;
        <span>{value.name}</span>&nbsp;
      </React.Fragment>
    ));

  return (
    <div>
      <Collapse defaultActiveKey={['0']}>
        <Panel header="category" key="1">
          {renderCheckboxLists()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox2;
