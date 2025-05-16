"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useState, useMemo } from "react";

interface Activity {
  id: string;
  logo: string;
  chainName: string;
  action: "Deposit" | "Withdraw";
  amount: string;
  time: string;
  txHash?: string;
}

const PoolActivity: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortField, setSortField] = useState<keyof Activity>("time");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const tableData: Activity[] = [
    {
      id: "1",
      logo: "/tx.svg",
      chainName: "Ethereum",
      action: "Deposit",
      amount: "1.234 ETH",
      time: "2 mins ago",
      txHash: "0x123...",
    },
    {
      id: "2",
      logo: "/tx.svg",
      chainName: "Polygon",
      action: "Withdraw",
      amount: "5.678 MATIC",
      time: "15 mins ago",
      txHash: "0x456...",
    },
  ];

  const filteredActivities = useMemo(() => {
    return tableData
      .filter(
        (activity) =>
          activity.chainName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          activity.action.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];

        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortDirection === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
        }

        return 0;
      });
  }, [tableData, searchQuery, sortField, sortDirection]);

  const totalPages = Math.ceil(filteredActivities.length / rowsPerPage);

  return (
    <div className="w-full max-w-[827px] flex flex-col" id="pool-activity">
      <h2 className="text-[20px] font-medium text-[#090A0B] mb-[26px]">
        Pool Activity
      </h2>

      <div className="flex justify-between items-center mb-[17px]">
        <div className="w-[305px] h-[43px] bg-white rounded-[12px] border border-[#00000033] flex items-center px-[24px] py-[13.5px] gap-[12px]">
          <Image
            src="/search-icon.svg"
            alt="search"
            width={15}
            height={15}
            className="text-[#767E93]"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by address"
            className="w-full text-[16px] text-[#ADADAD] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-[27px]">
          <div className="flex items-center gap-[12px]">
            <span className="text-[14px] text-[#3D3D3D]">Rows per page</span>
            <div className="relative w-[60px] h-[32px]">
              <select
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(Number(e.target.value))}
                className="w-full h-full rounded-[8px] border border-[#B0BAD1] pl-[12px] pr-[28px] appearance-none text-[14px] text-[#00172B] focus:outline-none"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <div className="absolute right-[12px] top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Image
                  src="/dropdown-icon.svg"
                  alt="sort"
                  width={15}
                  height={15}
                  className="text-[#767E93]"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[5px]">
            <span className="text-[14px] text-[#3D3D3D]">
              {`${(currentPage - 1) * rowsPerPage + 1}-${Math.min(
                currentPage * rowsPerPage,
                filteredActivities.length
              )} of ${filteredActivities.length}`}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-[32px] h-[32px] rounded-[8px] border border-[#DEDEDE] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <Image
                src="/chevron-left.svg"
                alt="Previous page"
                width={15}
                height={15}
                className="text-[#767E93]"
              />
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-[32px] h-[32px] rounded-[8px] border border-[#DEDEDE] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <Image
                src="/chevron-right.svg"
                alt="Next page"
                width={15}
                height={15}
                className="text-[#767E93]"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[#f6f6f6] rounded-3xl shadow-sm border border-gray-100">
            <thead className="">
              <tr className="bg-[#FDFCFC]">
                <th
                  scope="col"
                  className="px-6 text-sm text-left font-bold text-gray-500"
                >
                  Wallet
                </th>
                <th
                  scope="col"
                  className="px-6 text-sm text-left font-bold text-gray-500"
                >
                  Tx Type
                </th>
                <th
                  scope="col"
                  className="px-6 text-sm text-left font-bold text-gray-500"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-bold text-gray-500"
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#f6f6f6]">
              {tableData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">
                        {row.txHash}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.action}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.amount}
                  </td>
                  <td className="px-6 flex items-center justify-between py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.time}
                    <button className="rounded-3xl bg-[#f0e9ff] p-2.5 text-xs flex gap-0.5">
                      Tx
                      <Image
                        src="/hyperlink-black-arrow.svg"
                        width={12}
                        alt="arrow"
                        height={12}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PoolActivity;
