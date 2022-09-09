import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.178.21:5000/api",
});

// apiClient.get('/listings').then(response => {
//     if(!response.ok) {
//         response.problem();
//     }
// } )

export default apiClient;
