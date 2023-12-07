import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "../api/index";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import DisplayUser from "./DisplayUser";
const UserDetails = () => {
    const dispatch = useDispatch();
    const addNewUser = (payload) => {
        dispatch(addUser(payload));
    }
    return (
        <>
            <div>
                <button onClick={() => addNewUser(fakeUserData())}>Add user</button>
                <ul>
                    <DisplayUser />
                </ul>
                <DeleteAllUser />
            </div>
        </>
    )
}
export default UserDetails;
