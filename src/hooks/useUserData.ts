import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import {useEffect} from 'react';
import {fetchUsers} from '../slices/user.slice';

function useUserData(): [any[], () => void] {
  const {users} = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    handleRefreshUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefreshUsers = () => {
    dispatch(fetchUsers());
  };

  return [users, handleRefreshUsers];
}

export default useUserData;
