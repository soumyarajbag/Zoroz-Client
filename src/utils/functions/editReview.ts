import axios from "axios";

export const editReview = async(inputs:any,userId:string,productId:string)=>{
    try {
        const token:any =
          localStorage.getItem("token")
          const updatedInputs = { ...inputs, userId: userId, productId: productId };
          console.log(updatedInputs)
        const response = await axios.post(
          `https://zoroz-ecommerce-backend.onrender.com/products/reviews/edit`,
          updatedInputs,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
}