import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { AnyAction } from "redux";
import { dbService } from "../firebase";
import { ThunkUtil } from "../modules/types/UtilTypes";

export default function onSnaptUtil<
  A extends (...params: any) => AnyAction,
  B extends (...params: any) => AnyAction
>(db: string, order: string | null, sucess: A, error: B): ThunkUtil {
  return async (dispatch) => {
    try {
      if (order) {
        onSnapshot(
          query(collection(dbService, db), orderBy(order, "desc")),
          (snapshot) => {
            const SnapData = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            dispatch(sucess(SnapData));
          }
        );
      } else {
        onSnapshot(query(collection(dbService, db)), (snapshot) => {
          const SnapData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          dispatch(sucess(SnapData));
        });
      }
    } catch (e) {
      dispatch(error(e));
    }
  };
}
