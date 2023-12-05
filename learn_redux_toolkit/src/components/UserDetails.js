import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "../api/index";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
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
                    <li>User 1</li>
                    <li>User 2</li>
                </ul>
                <DeleteAllUser />
            </div>
        </>
    )
}
export default UserDetails;
