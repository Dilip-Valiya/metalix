import { clients } from "@/constants";
import Link from "next/link";

export default function Clients() {
  return (
    <div className="h-[calc(100vh-62px)] bg-gray-100 dark:bg-gray-900 p-4 flex flex-col items-center relative">
      <div className="flex w-full gap-4 mb-4 items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 ">
          Clients
        </h1>
        <Link href="/clients/add">
          <p className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
            Add New
          </p>
        </Link>
      </div>
      <div className="w-full overflow-x-auto h-[calc(100vh-12rem)]">
        <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Company Name
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Email
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Mobile
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                GST No.
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr
                key={client.id}
                className="odd:bg-white even:bg-gray-100 dark:odd:bg-gray-900 dark:even:bg-gray-800"
              >
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  {client.name}
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  {client.email}
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  {client.phone}
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  {client.gstNo}
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  {client.address.area}, {client.address.pincode},{" "}
                  {client.address.state}, {client.address.country}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
