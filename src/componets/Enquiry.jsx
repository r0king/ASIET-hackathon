import React, { Component } from "react";
import axios from "axios";

export default class Enquiry extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const enquiryData = Object.fromEntries(formData.entries());

    const requestData = {
      records: [
        {
          fields: {
            Name: `${enquiryData["first-name"]} ${enquiryData["last-name"]}`,
            Email: enquiryData.email,
            Contact: enquiryData.phone,
            Query: enquiryData.enquiry,
            FoundFrom: [enquiryData.country],
          },
        },
      ],
    };

    makeRequest(requestData);
    event.target.reset();
  };
  render() {
    return (
      <div className="relative mx-auto py-16 px-4 w-full max-w-7xl">
        <div className="mx-auto max-w-4xl">
          {/* :SHIPPING INFORMATIONS */}
          <div>
            {/* ::Title */}
            <h2 className="mb-5 text-2xl  text-[#f0f0f0] text-center font-bold">
              Enquiry
            </h2>
            {/* ::Form */}
            <form
              action=""
              onSubmit={this.handleSubmit}
              className="grid grid-cols-12 gap-x-5 gap-y-8"
            >
              {/* :::first name */}
              <span className="col-span-full sm:col-span-6 relative">
                <label
                  htmlFor="first-name"
                  className="absolute top-1/2 right-3 text-base text-[var(--secondary-color)] font-medium tracking-wide transform -translate-y-1/2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  required
                  className="form-input pl-4 pr-20 w-full shadow-sm rounded-xl   bg-gray-50/20 p-6 bg-opacity-50 text-xl text-white focus: focus:ring-1 focus:ring-white"
                />
              </span>
              {/* :::last name */}
              <span className="col-span-full sm:col-span-6 relative">
                <label
                  htmlFor="last-name"
                  className="absolute top-1/2 right-3 text-base text-[var(--secondary-color)] font-medium tracking-wide transform -translate-y-1/2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  required
                  className="form-input pl-4 pr-20 w-full shadow-sm rounded-xl   bg-gray-50/20 p-6 bg-opacity-50 text-xl text-white focus: focus:ring-1 focus:ring-white"
                />
              </span>
              {/* :::email */}
              <span className="col-span-full sm:col-span-6 relative">
                <label
                  htmlFor="email"
                  className="absolute top-1/2 right-3 text-base text-[var(--secondary-color)] font-medium tracking-wide transform -translate-y-1/2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input pl-4 pr-24 w-full shadow-sm rounded-xl   bg-gray-50/20 p-6 bg-opacity-50 text-xl text-white focus: focus:ring-1 focus:ring-white"
                />
              </span>
              {/* :::phone */}
              <span className="col-span-full sm:col-span-6 relative">
                <label
                  htmlFor="phone"
                  className="absolute top-1/2 right-3 text-base text-[var(--secondary-color)] font-medium tracking-wide transform -translate-y-1/2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{10}"
                  style={{}}
                  required
                  className="appearance-none form-input pl-4 pr-24 w-full shadow-sm rounded-xl   bg-gray-50/20 p-6 bg-opacity-50 text-xl text-white focus: focus:ring-1 focus:ring-white"
                />
              </span>

              <span className="col-span-full sm:col-span-12 relative">
                <label htmlFor="country" className="sr-only">
                  Found By
                </label>
                <select
                  name="country"
                  id="country"
                  defaultValue=""
                  className="form-select w-full shadow-sm rounded-xl  hover:text-black  bg-gray-50/20 p-6 bg-opacity-50 text-base text-white focus: focus:ring-1 focus:ring-white"
                >
                  <option value="Social Media">Social Media</option>
                  <option value="Word of mouth">Word of Mouth</option>
                  <option value="Others">Other</option>
                </select>
              </span>
              {/* :::address */}
              <span className="col-span-full sm:col-span-12 lg:col-span-12 relative">
                <label
                  htmlFor="Description"
                  className="absolute top-5 right-3 text-base text-[var(--secondary-color)] font-medium tracking-wide transform -translate-y-1/2"
                >
                  Enquiry
                </label>
                <textarea
                  type="text"
                  id="enquiry"
                  name="enquiry"
                  required
                  className=" h-[40vh] text-xl form-input pl-4 pr-16 w-full shadow-sm rounded-xl   bg-gray-50/20 p-6 bg-opacity-50 text-white focus: focus:ring-1 focus:ring-white"
                />
              </span>
              <div className="md:col-span-4 hidden md:block "></div>
              {/* :::submit */}
              <button
                type="submit"
                className="my-5 col-span-12 text-center justify-center w-full md:col-span-4 p-5 bg-[var(--secondary-color)] text-[var(--secondary-color))]
                text-base font-bold inline-flex items-center rounded-xl transition-all duration-200 ease-linear 
                hover:bg-[var(--accent-color)] text-[var(--primary-accent-color)] group-hover:text-[var(--primary-accent-color)]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
function makeRequest(data) {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.airtable.com/v0/appAkqiO7RdH8gSN9/Hackthon_Enquiry?maxRecords=3&view=Grid%20view",
    headers: {
      Authorization:
        "Bearer patajchFu8DZxs2uV.ee87e3047e344ccceb56fb19022cb0e2a54ad2161c8a95c295bdbcf0c89ea9a4",
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      //   console.log(JSON.stringify(response.data));
      alert("Thank you for your enquiry. We will get back to you soon.");
      //   clearForm
    })
    .catch(function (error) {
      alert("Something went wrong. Please try again later or contact us directly at hackathon@adishankara.ac.in");
    });
}
