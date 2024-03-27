import React, { Component } from 'react';
import PropTypes from 'prop-types';
import commerce from '../../../lib/commerce';
import Dropdown from '../../common/atoms/Dropdown';

export default class LaneparkAddressForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subdivisions: {},
    };

    this.getRegions = this.getRegions.bind(this);
  }

  componentDidMount() {
    this.getRegions(this.props.country);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.country !== this.props.country) {
      this.getRegions(this.props.country);
    }
  }

  getRegions(country) {
    commerce.services.localeListSubdivisions(country).then(resp => {
      this.setState({ subdivisions: resp.subdivisions });
    }).catch(error => console.error(error));
  }

  render() {
    const {
      type,
      countries,
      country,
      region,
      name,
      townCity,
      street,
      street2,
      postalZipCode,
    } = this.props;

    return (
      <div className="lanepark-address-form">
        <div className="form-section">
          <label>
            <span>Full Name*</span>
            <input required name={`${type}[name]`} autoComplete="name" value={name} />
          </label>
        </div>
        <div className="form-section">
          <label>
            <span>Country*</span>
            <Dropdown required name={`${type}[country]`} value={country}>
              {Object.entries(countries).map(([code, name]) => (
                <option value={code} key={code}>{name}</option>
              ))}
            </Dropdown>
          </label>
          <label>
            <span>City*</span>
            <input required name={`${type}[town_city]`} autoComplete="address-level2" value={townCity} />
          </label>
        </div>
        <div className="form-section">
          <label>
            <span>Address Line 1*</span>
            <input required autoComplete="street-address" name={`${type}[street]`} value={street} placeholder="House number, street address, etc." />
          </label>
          <label>
            <span>Address Line 2 (Optional)</span>
            <input name={`${type}[street_2]`} value={street2} placeholder="Apartment, suite number, etc." />
          </label>
        </div>
        <div className="form-section">
          <label>
            <span>State/Province/Region*</span>
            <Dropdown required name={`${type}[region]`} value={region}>
              {Object.entries(this.state.subdivisions).map(([code, name]) => (
                <option key={code} value={code}>{name}</option>
              ))}
            </Dropdown>
          </label>
          <label>
            <span>Postal Code/Zip Code*</span>
            <input required autoComplete="postal-code" name={`${type}[postal_zip_code]`} value={postalZipCode} />
          </label>
        </div>
      </div>
    );
  }
}

LaneparkAddressForm.propTypes = {
  type: PropTypes.string.isRequired,
  countries: PropTypes.object.isRequired,
  country: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  townCity: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  street2: PropTypes.string,
  postalZipCode: PropTypes.string.isRequired,
};
