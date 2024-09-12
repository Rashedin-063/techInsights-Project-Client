import Swal from 'sweetalert2';
import { axiosApi } from './axiosApi';


// create a user to the database
export const createOrUpdateUser = async (userInfo) => {

//  return console.log(userInfo)
  

  try {
    const res = await axiosApi.put('/users', userInfo);  

    if (res.data.insertedId) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User added to the database',
        showConfirmButton: false,
        timer: 1500,
      });
    }

    if (res.data.modifiedCount) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User updated successfully',
        showConfirmButton: false,
        timer: 1500,
      });
    }



    return res;
  } catch (error) {
    console.log(error);

    Swal.fire({
      position: 'center',
      icon: 'error',
      title: error.message,
      showConfirmButton: false,
      timer: 3000,
    })
    throw error;
  }
};

// get all the users from db
