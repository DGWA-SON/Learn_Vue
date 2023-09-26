import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const user = ref(projectAuth.currentUser);
// ban dau se lay du lieu tu currentUser ( neu kh co bao null)

projectAuth.onAuthStateChanged(function (_user) {
  if (_user) user.value = _user;
});
// lawngs nghe suw thay doi

function getUser() {
  return { user };
}

export function useUser() {
  return { getUser };
}
