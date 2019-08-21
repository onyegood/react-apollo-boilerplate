import React, { useState } from 'react'
import { countries } from '../../../db/countries';
import { industries } from '../../../db/industries';
import { size } from '../../../db/size';

const CompanyForm = () => {
  const [country, setCountry] = useState('Nigeria');
  const [state, setState] = useState('Abia');
  return (
    <>
      <div className="form-group">
        <fieldset disabled="">
          <label className="control-label" for="disabledInput">Company Name</label>
          <input className="form-control" id="disabledInput" type="text" placeholder="Company name here..." disabled="" />
        </fieldset>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <fieldset disabled="">
              <label className="control-label" for="disabledInput">Email</label>
              <input className="form-control" id="disabledInput" type="text" placeholder="Email here..." disabled="" />
            </fieldset>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <fieldset disabled="">
              <label className="control-label" for="disabledInput">Phone</label>
              <input className="form-control" id="disabledInput" type="text" placeholder="Phone here..." disabled="" />
            </fieldset>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label for="country">Country</label>
            <select className="form-control" id="country">
              {countries.map(x => <option>{x.country}</option>)}
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label for="state">State</label>
            <select
              className="form-control"
              id="state"
            >
              {
                countries ?
                  countries.filter(s => s.country === country)
                    .map((x, i) => x.states.map((a, i) =>
                      <option value={country === 'Nigeria' ? a.state.name : a} key={i + 1}>
                        {country === 'Nigeria' ? a.state.name : a}
                      </option>)
                    ) : null
              }
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label for="lga">LGA</label>
            <select className="form-control" id="lga">
              {
                countries ?
                  countries.filter(s => s.country === country)
                    .map((x, i) => country === 'Nigeria' ?
                      x.states.filter(z => z.state.name === state)
                        .map((a, i) => a.state.locals.map((l, i) =>
                          <option value={l.name} key={i + 1}>
                            {l.name}
                          </option>)) : null
                    ) : null
              }
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <fieldset disabled="">
              <label className="control-label" for="disabledInput">Industry</label>
              <select className="form-control" id="industry">
                {industries.map(x => <option key={x.name}>{x.name}</option>)}
              </select>
            </fieldset>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <fieldset disabled="">
              <label className="control-label" for="disabledInput">Company Size</label>
              <select className="form-control" id="size">
                {size.map(x => <option key={x.name}>{x.name}</option>)}
              </select>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="form-group">
        <fieldset disabled="">
          <label className="control-label" for="disabledInput">Address</label>
          <textarea className="form-control" id="disabledInput" type="text" placeholder="Address here..." disabled="" />
        </fieldset>
      </div>

      <div className="form-group mt-5">
        <button className="btn btn-primary btn-block">
          Submit
        </button>
      </div>
    </>
  );
};

export default CompanyForm;