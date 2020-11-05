import React, { useState, useContext, useEffect } from "react";
import * as ROUTES from "../constants/routes";
import SelectProfileContainer from "./profilesContainer";
import { FirebaseContext } from "./../context/firebase";

export interface IBrowseContainerProps {
  slides: any;
}

export default function BrowseContainer({ slides }: IBrowseContainerProps) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log("profile", profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile]);

  return <SelectProfileContainer user={user} setProfile={setProfile} />;
}
