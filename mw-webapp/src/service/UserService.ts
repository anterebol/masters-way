import {onValue, ref, set} from "firebase/database";
import {db} from "src/firebase";
import {User as UserDTO} from "src/model/firebaseCollection/User";

interface NewUserData {
  uuid: string;
  email: string;
  name: string;
}

export class UserService {

  public static onValueFromRealTimeDb(callBack: (data: UserDTO[]) => void) {
    onValue(ref(db, "/users"), async (snapshot) => {
      const users: UserDTO[] = snapshot.val();
      if (users !== null) {
        callBack(users);
      }
    });
  }

  public static writeNewUserData(data: NewUserData) {
    const usersListRef = ref(db, "/users/" + data.uuid);
    set(usersListRef, {
      uuid: data.uuid,
      email: data.email,
      name: data.name,
    });
  }

}