import React, { useState, useEffect } from "react";
import '../Leaderboard.css';
import { fetchPoints } from "../../Controller";

export default function Points({ user }) {
  const [points, setPoints] = useState();


  useEffect(() => {
    fetchPoints().then(res => {
      setPoints(res);
    })
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="ScoreSum text-center xs:mt-6 sm:mt-6 md:mt-12">
          <h1 className="p-4">Your Score is {user.points} points</h1>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">UserName</th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Points</th>
                </tr>
              </thead>
              <tbody>
                {points
                  ? points.map((point, index) => {
                    return (
                      <tr key={index}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {points.indexOf(point) + 1}º
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center justify-items-center">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {point.nickname}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            {point.points}
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
