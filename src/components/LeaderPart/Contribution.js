import React, { useState, useEffect } from "react";
import '../Leaderboard.css';
import { fetchContribution } from "../../Controller";

export default function Contribution({ user }) {
  const [contributions, setContributions] = useState();
  const [ownContributions, setOwnContributions] = useState()

  useEffect(() => {
    fetchContribution().then(res => {
      setContributions(res)
    });// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (contributions) {
      const own = contributions.filter(filterFunction)
      setOwnContributions(own)
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contributions]);

  const filterFunction = (e) => {
    if (user.nickname === e.nickname) return true
    else return false
  }

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="ScoreSum text-center xs:mt-6 sm:mt-6 md:mt-12">
          {ownContributions && <h1 className="p-4">You contributed {ownContributions[0] ? ownContributions[0].contributions : '0'} Questions</h1>}
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
                    Contribution
                  </th>
                </tr>
              </thead>
              <tbody>
                {contributions
                  ? contributions.map((contribution, index) => {
                    return (
                      <tr key={index}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {contributions.indexOf(contribution) + 1}º
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center justify-items-center">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {contribution.nickname}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            {contribution.contributions}
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
