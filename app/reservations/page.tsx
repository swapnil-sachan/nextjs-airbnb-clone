import EmptyState from "../components/EmptyState";
import ReservationsClient from "./ReservationsClient";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";

import React from 'react'

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if(!currentUser) {
    return (
      <EmptyState
        title="Unauthorized"
        subtitle="Please login to access"
      />
    );
  }

  const reservations = await getReservations({
    authorId: currentUser.id
  });

  if(reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="It looks like you have no reservations on your property"
      />
    )
  }

  return (
    <ReservationsClient
      reservations={reservations}
      currentUser={currentUser}
    />
  )
}

export default ReservationsPage