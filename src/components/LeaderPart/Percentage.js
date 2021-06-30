import React, { useState, useEffect } from "react";
import '../Leaderboard.css';
import { fetchPercentages } from "../../Controller";

export default function Percentage({ user }) {
  const [percentages, setPercentages] = useState();

  useEffect(() => {
    fetchPercentages().then(res => {
      setPercentages(res)
    });
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="ScoreSum text-center xs:mt-6 sm:mt-6 md:mt-12">
          <h1 className="p-4">You answered {Math.round((user.correct) * 1000 / (user.answered)) / 10}% correct</h1>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    UserName
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    % of correct answered Questions
                  </th>
                </tr>
              </thead>
              <tbody>
                {percentages
                  ? percentages.map((percent, index) => {
                    return (
                      <tr key={index}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {percentages.indexOf(percent) + 1}º
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center justify-items-center">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {percent.nickname}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            {percent.percentage}
                          </p>
                        </td>
                      </tr>
                    );
                  })
                  : <tr><td>Loading</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
