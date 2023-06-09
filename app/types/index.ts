import { Listing, Reservation, User } from "@prisma/client";

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "checkIn" | "checkOut" | "listing"
> & {
  createdAt: string;
  checkIn: string;
  checkOut: string;
  listing: SafeListing;
};

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string,
  updatedAt: string,
  emailVerified: string | null
}