import React, { ReactNode } from "react";


export default function TokenAllocation() {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="px-4 py-3 font-medium">Type</th>
            <th className="px-4 py-3 font-medium">Allocation</th>
            <th className="px-4 py-3 font-medium">Total</th>
            <th className="px-4 py-3 font-medium">Schedule</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-3">Public Sale</td>
            <td className="px-4 py-3">30%</td>
            <td className="px-4 py-3">15,000</td>
            <td className="px-4 py-3">Immediate Unlock</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-3">Team</td>
            <td className="px-4 py-3">10%</td>
            <td className="px-4 py-3">5,000</td>
            <td className="px-4 py-3">12-month Vesting</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-3">Liquidity</td>
            <td className="px-4 py-3">20%</td>
            <td className="px-4 py-3">10,000</td>
            <td className="px-4 py-3">6-month Vesting</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-3">Ecosystem Growth</td>
            <td className="px-4 py-3">40%</td>
            <td className="px-4 py-3">20,000</td>
            <td className="px-4 py-3">Gradual Unlock</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}