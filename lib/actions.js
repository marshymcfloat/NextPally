"use server";

import Customer from "@/lib/models/Customer";

export async function getCustomerSuggestions(name) {
  try {
    const customers = await Customer.find({
      customerName: { $regex: `^${name}`, $options: "i" }, // Case-insensitive search
    }).limit(5); // You can limit the number of results

    console.log(customers);
    return customers;
  } catch (error) {
    console.error("Error fetching customer suggestions:", error);
    return [];
  }
}
