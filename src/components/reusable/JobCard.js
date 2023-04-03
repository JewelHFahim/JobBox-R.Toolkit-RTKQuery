import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../../features/job/jobApi";

const JobCard = ({ jobData }) => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetJobsQuery();

  const { _id, position, companyName, location, employmentType } = data || {};


  return (
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
  );
};

export default JobCard;
