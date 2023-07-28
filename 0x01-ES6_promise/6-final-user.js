import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((result) => {
    const { status, reason } = result[1];
    return [{ ...result[0] }, { status, value: `${reason}` }];
  });
}
