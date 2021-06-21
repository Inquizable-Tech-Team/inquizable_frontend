import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import '../Leaderboard.css';

export default function Percentage() {
  const [percentages, setPercentages] = useState();

  useEffect(() => {
    fetchPercentages();
  }, []);

  const fetchPercentages = async () => {
    await Axios.get("https://inquizable.herokuapp.com/users/percentage")
      .then((response) => setPercentages(response.data))
      .catch((error) => console.log(error));
  };
  return (
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
      <div className="ScoreSum text-center">
          <h1 className="p-4">You answered 80% correct</h1>
      </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    #
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    UserName
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    % of correct answered Questions
                  </th>
                </tr>
              </thead>
              {percentages
                ? percentages.map((percent) => {
                    return (
                      <>
                        <tbody>
                          <tr>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {percentages.indexOf(percent) + 1}º
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div class="flex items-center justify-items-center">
                                <div class="ml-3">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                    {percent.nickname}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap text-center">
                                {percent.percentage}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </>
                    );
                  })
                : "No Scoring available"}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
