const axios = require('axios').default;

export const getAllVulnerabilities = () => {
 
  try {
    return await axios.get("/api/v1/vulnerability");
  } catch (err) {

  }
}
