import React, { useState } from 'react';
import { Checkbox, Collapse } from 'antd';

const { Panel } = Collapse;

const location = [
  {
    _id: 1,
    name: 'Gedung A'
  },
  {
    _id: 2,
    name: 'Gedung B'
  },
  {
    _id: 3,
    name: 'Gedung C'
  },
  {
    _id: 4,
    name: 'Gedung D'
  },
  {
    _id: 5,
    name: 'Gedung E'
  },
  {
    _id: 6,
    name: 'Gedung F'
  },
  {
    _id: 7,
    name: 'Gedung G'
  },
  {
    _id: 8,
    name: 'Gedung H'
  },
  {
    _id: 9,
    name: 'Pendopo'
  },
  {
    _id: 10,
    name: 'Gedung Direktorat'
  },
  {
    _id: 11,
    name: 'Gedung P2T'
  },
  {
    _id: 12,
    name: 'Area Parkiran Mahasiswa'
  },
  {
    _id: 13,
    name: 'Area Parkiran Dosen'
  },
  {
    _id: 14,
    name: 'Student Center'
  },
  {
    _id: 15,
    name: 'Masjid LH'
  },
  {
    _id: 16,
    name: 'BRI Polban'
  },
  {
    _id: 17,
    name: 'Gedung MKU'
  }
];

function CheckBox(props) {
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
    location.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handleToggle(value._id)}
          type="checkbox"
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        &nbsp;&nbsp;
        <span>{value.name}</span>&nbsp;&nbsp;&nbsp;
      </React.Fragment>
    ));
  const renderCheckboxLists2 = () =>
    location.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handleToggle(value._id)}
          type="checkbox"
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        &nbsp;&nbsp;
        <span>{value.name}</span>&nbsp;&nbsp;
      </React.Fragment>
    ));

  return (
    <div>
      <Collapse defaultActiveKey={['0']}>
        <Panel header="location" key="1">
          {renderCheckboxLists()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;
