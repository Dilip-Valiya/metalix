"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Formik } from "formik";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

const AddClient = () => {
  const router = useRouter();

  return (
    <div className="h-[calc(100vh-62px)] bg-gray-100 dark:bg-gray-900 p-4 flex flex-col items-center relative">
      <div className="flex w-full gap-4 mb-4 items-center">
        <ArrowLeftIcon
          className="text-2xl h-4 cursor-pointer"
          onClick={() => router.push("/clients")}
        />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 w-[100%]">
          Add new client
        </h1>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          gstNo: "",
          area: "",
          pincode: "",
          state: "",
          country: "",
        }}
        validate={(values) => {
          const errors = {
            name: "",
            email: "",
            phone: "",
            gstNo: "",
            area: "",
            pincode: "",
            state: "",
            country: "",
          };
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-4/5">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Company Name"
              className="border border-gray-300 dark:border-gray-700 px-4 py-2"
            />
            <p className="text-red-500 text-sm">
              {errors.name && touched.name && errors.name}
            </p>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Email"
              className="border border-gray-300 dark:border-gray-700 px-4 py-2"
            />
            <p className="text-red-500 text-sm">
              {errors.email && touched.email && errors.email}
            </p>

            <input
              type="text"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              placeholder="Mobile"
              className="border border-gray-300 dark:border-gray-700 px-4 py-2"
            />
            <p className="text-red-500 text-sm">
              {errors.phone && touched.phone && errors.phone}
            </p>
            <input
              type="text"
              name="gstNo"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.gstNo}
              placeholder="GST No."
              className="border border-gray-300 dark:border-gray-700 px-4 py-2"
            />
            <p className="text-red-500 text-sm">
              {errors.gstNo && touched.gstNo && errors.gstNo}
            </p>
            <p className="">Address</p>
            <input
              type="text"
              name="area"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.area}
              placeholder="Area"
              className="border border-gray-300 dark:border-gray-700 px-4 py-2"
            />
            <p className="text-red-500 text-sm">
              {errors.area && touched.area && errors.area}
            </p>
            <input
              type="text"
              name="pincode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.pincode}
              placeholder="Pincode"
              className="border border-gray-300 dark:border-gray-700 px-4 py-2"
            />
            <p className="text-red-500 text-sm">
              {errors.pincode && touched.pincode && errors.pincode}
            </p>
            <input
              type="text"
              name="state"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.state}
              placeholder="State"
              className="border border-gray-300 dark:border-gray-700 px-4 py-2"
            />
            <p className="text-red-500 text-sm">
              {errors.state && touched.state && errors.state}
            </p>
            <input
              type="text"
              name="country"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.country}
              placeholder="Country"
              className="border border-gray-300 dark:border-gray-700 px-4 py-2"
            />
            <p className="text-red-500 text-sm">
              {errors.country && touched.country && errors.country}
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddClient;
