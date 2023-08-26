import { NextResponse } from "next/server";
import { user } from "../db";

export async function GET() {
  try {
    // Fetch the user data from the database
    const userData = user.map((person) => ({
      id: person.id,
      name: person.name,
      // age: person.age,
      // city: person.city,
      // country: person.country
    }));

    // Return the user data as a JSON response
    return NextResponse.json(userData);
  } catch (error) {
    // Handle any errors that occur during the data retrieval
    console.error("Error retrieving user data:", error);
  }
}