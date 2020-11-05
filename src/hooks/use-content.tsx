import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "./../context/firebase";

export interface IUseContentProps {}

export default function UseContent(target: any) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot: any) => {
        const allContent = snapshot.docs.map((contentObj: any) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setContent(allContent);
      })
      .catch((error: any) => {
        console.log(error.message);
      });
  }, []);

  return { [target]: content };
}
