import { useDispatch } from "react-redux";
// import { deleteUsers } from "../store/slices/userSlice";
import { clearAllUsers } from "../store/actions";
const DeleteAllUser = () => {
    const dispatch = useDispatch();
    const deleteAllUser = () => {
        dispatch(clearAllUsers());
    }
    return (
        <>
            <button onClick={deleteAllUser}>Delete All user</button>
        </>
    )
}
export default DeleteAllUser;
