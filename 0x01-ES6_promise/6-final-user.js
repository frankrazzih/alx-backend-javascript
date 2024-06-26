import signUpUser from "./4-user-promise"
import uploadPhoto from "./5-photo-reject"
export default function handleProfileSignup(firstName, lastName, fileName){
    return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => {
        return res.map((resp) => ({
            status : resp.status,
            value: (() => {
                if (resp.status === 'fulfilled'){
                    return resp.value;
                }
                else{
                    return String(resp.reason);
                }
            })()
        }));
    });
}