import Swal from 'sweetalert2';
import { axiosApi } from './axiosApi';
import swalAlert from './swalAlert';



// create a user to the database
export const createOrUpdateUser = async (userInfo) => {
 console.log(userInfo)
 

  try {
    const res = await axiosApi.put('/users', userInfo); 
    
    console.log(res.data)
    

    if (res.data.upsertedId) {
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
        title: 'User info updated successfully',
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

export const updateProfileInfo = async (updatedInfo, email) => {
  console.log(updatedInfo, email)
  try {
    const res = await axiosApi.patch(`/users/${email}`, updatedInfo);

    console.log(res.data);

    if (res.data.modifiedCount) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User profile updated successfully',
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
    });
    throw error;
  }
}

// post publisher info
export const postPublisherInfo = async (publisherData) => {
  try {
   console.log(publisherData)
   
    const res = await axiosApi.post('/publishers', publisherData);
    
    console.log(res)
    

    if (res.data.insertedId) {
 swalAlert('success', 'Publisher created successfully');
   }
 } catch (error) {
    console.error(error)
      swalAlert('error', error.message);
 }
}