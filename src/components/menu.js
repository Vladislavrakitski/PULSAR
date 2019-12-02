import React, { Component } from 'react';

export default class Menu extends Component{

  render() {
    return(
      <div className='menu container'>
        <ul className="list-group switch">
          <li className="list-group-item line">
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="customSwitch1" />
              <label className="custom-control-label" htmlFor="customSwitch1">Toggle this switch element</label>
            </div>
          </li>
          <li className="list-group-item line"><input type="range" className="custom-range" id="customRange1" /></li>
          <li className="list-group-item line">Morbi leo risus</li>
          <li className="list-group-item line">Porta ac consectetur ac</li>
          <li className="list-group-item line">Vestibulum at eros</li>
        </ul>
      </div>
    )
  }
}