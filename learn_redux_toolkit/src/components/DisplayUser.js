import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";
const DisplayUser = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.users;
    });
    const deleteUsers = (id) => {
        dispatch(removeUser(id));
    }
    return (
        <>
            {
                data.map((user, id) => {
                    return <li key={id}>
                        {user}
                        <button onClick={() => deleteUsers(id)}>delete</button>
                    </li>
                })
            }
        </>
    )
}

export default DisplayUser;
