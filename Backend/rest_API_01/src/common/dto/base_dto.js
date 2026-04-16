import Joi from "joi";

class baseDto {
    static schema = Joi.object({})

    static validate(data) {
       const {error, value} = this.schema.validate(data, {
            abortEarly: false,  // if error shown it abort the execution 
            stripUnknown: true  // if any extra field shown throw error
        })

        if(error){
            const errors = error.details.map((err)=> err.message)
            return {errors, value=null}
        }
        return(errors=null, value)
    }
}

export default baseDto