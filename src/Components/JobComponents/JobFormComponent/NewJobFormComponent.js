import React from "react";
import "./NewJobFormComponent.scss";

function NewJobFormComponent() {
  return (
    <div>
      <div className="">
        <form action="">
          <div className="form-group row">
            <label for="inputTitle" className="col-sm-2 col-form-label">
              <b>Title</b>{" "}
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputTitle"
                placeholder="Add your job title here"
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="inputTitle" className="col-sm-2 col-form-label">
              <b>Description</b> <br />{" "}
              <div className="description-tip"> Max word count : 50</div>
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="inputDescription"
                rows="3"
                placeholder="Add your job description here"
              ></textarea>
            </div>
          </div>

          <div className="form-group row">
            <label for="inputTitle" className="col-sm-2 col-form-label">
              <b>Category</b>
            </label>
            <div className="col-sm-10">
              <select className="form-control form-control-sm">
                <option selected>choose category ...</option>
                <option>Computer & IT</option>
                <option>Food</option>
                <option>Legal</option>
                <option>Hair & Beauty Salons</option>
                <option>Landscaping & Fencing</option>
                <option>Photography</option>
                <option>Realestate Agents</option>
                <option>Rentals & Roommates</option>
                <option>Travel Agents</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label for="inputTitle" className="col-sm-2 col-form-label">
              <b>Job Status</b>
            </label>
            <div className="col-sm-10">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="job-post-status"
                      id="urgent-post"
                      value="1"
                    />
                    <label className="form-check-label" for="urgent-pos">
                      Urgent Post
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-check col-md-6 form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="job-post-status"
                      id="schedule-post"
                      value="2"
                    />
                    <label className="form-check-label" for="schedule-post">
                      Sceduled Post
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <label for="inputTitle" className="col-sm-2 col-form-label">
              <b>Location</b> <br />{" "}
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputLocation"
                placeholder="Add your job location here"
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="inputBudjet" className="col-sm-2 col-form-label">
              <b>Budjet</b>
            </label>
            <div className="col-sm-10 col-md-4">
              <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">LKR</div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="inputBudjet"
                  placeholder="Add your job budjet here"
                />
              </div>
            </div>
          </div>

          <div className="form-group row">
            <label for="inputBudjet" className="col-sm-2 col-form-label">
              <b>Contact No</b>
            </label>

            <div className="col-sm-10 col-md-4">
              <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">+94</div>
                </div>
                <input
                  type="number"
                  class="form-control"
                  id="inputContactNo"
                  placeholder="00 000 0000"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input class="btn btn-primary" type="submit" value="Draft" />
            </div>
            <div className="col-md-6">
              <input class="btn btn-primary" type="submit" value="Post Job" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewJobFormComponent;
