import apiError from "../utils/api.Error.js";

const validate = (Dtoclass) =>{
    return (req, res, next)=>{
      const {error, value} = Dtoclass.validate(req.body)
      if(error){
        throw apiError.badRequest(error.join("; "))
      }
      req.body = value
      next()
    }
}

export default validate