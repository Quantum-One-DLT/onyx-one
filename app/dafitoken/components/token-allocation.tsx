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
            <td className="px-4 py-3">25%</td>
            <td className="px-4 py-3">12,500</td>
            <td className="px-4 py-3">50% TGE, vesting 6 months</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-3">Team</td>
            <td className="px-4 py-3">10%</td>
            <td className="px-4 py-3">5,000</td>
            <td className="px-4 py-3">Cliff 3 months, vesting 36 months</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-3">Liquidity</td>
            <td className="px-4 py-3">20%</td>
            <td className="px-4 py-3">10,000</td>
            <td className="px-4 py-3">45% TGE, vesting 6 months</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-3">Ecosystem Growth</td>
            <td className="px-4 py-3">35%</td>
            <td className="px-4 py-3">17,500</td>
            <td className="px-4 py-3">20% TGE, vesting 24 months</td>
          </tr>
 <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-3">AirDrop</td>
            <td className="px-4 py-3">2.5%</td>
            <td className="px-4 py-3">1250</td>
            <td className="px-4 py-3">Variable</td>
          </tr>
 <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-3">Sources</td>
            <td className="px-4 py-3">5%</td>
            <td className="px-4 py-3">2500</td>
            <td className="px-4 py-3">50% TGE, vesting 24 months</td>
          </tr>
 <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-3">Angel Investors</td>
            <td className="px-4 py-3">2.5%</td>
            <td className="px-4 py-3">1250</td>
            <td className="px-4 py-3">50% TGE, vesting 12 months</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}