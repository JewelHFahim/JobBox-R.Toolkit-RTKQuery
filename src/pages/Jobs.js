import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/reusable/JobCard";
import { useGetJobsQuery } from "../features/job/jobApi";

const Jobs = () => {
  const { data, isLoading, isError } = useGetJobsQuery();
  const navigate = useNavigate();

  console.log(data);

  return (
    <div className="pt-14 mx-10">
      <div className="bg-primary/10 p-5 rounded-2xl">
        <h1 className="font-semibold text-xl">Find Jobs</h1>
      </div>

      <div className="pt-14 grid grid-cols-2 gap-10">
        {data?.data.map(
          ({ position, companyName, location, employmentType, _id }) => (
            <div className="border border-gray-300 shadow-xl p-5 rounded-2xl text-primary">
              <div className="flex justify-between  text-primary">
                <div>
                  <p className="text-xl">{position}</p>

                  <small className="text-primary/70 ">
                    by
                    <span className="font-semibold hover:text-primary cursor-pointer hover:underline transition-all">
                      {companyName}
                    </span>
                  </small>
                </div>
                <p>{location}</p>
              </div>
              <div className="flex justify-between items-center mt-5">
                <p>{employmentType}</p>
                <button
                  className="btn"
                  onClick={() => navigate(`/job-details/${_id}`)}
                >
                  Details
                </button>
              </div>
            </div>
          )
        )}
      </div>

     
    </div>
  );
};

export default Jobs;
