import Swal from 'sweetalert2';
import { axiosCommon } from '../hooks/useAxiosCommon'; 

// create a user to the database
export const createOrUpdateUser = async (user) => {
  try {
    const userInfo = await axiosCommon.put('/users', user);
    

    if (userInfo.data.acknowledged || userInfo.data.modifiedCount) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User added to the database',
        showConfirmButton: false,
        timer: 1500,
      });
    }

    return userInfo;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
