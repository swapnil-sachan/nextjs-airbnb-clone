import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";

import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";

import React from 'react'

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if(!currentUser) {
    return (
      <EmptyState
        title="Unauthorized!"
        subtitle="Please login to access"
      />
    )
  }

  const listings = await getListings({ userId: currentUser.id });

  if(listings.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you haven't listed any properties."
      />
    )
  }

  return (
    <PropertiesClient
      listings={listings}
      currentUser={currentUser}
    />
  )
}

export default PropertiesPage