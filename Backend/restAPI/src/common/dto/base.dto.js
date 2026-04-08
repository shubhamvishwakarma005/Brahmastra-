import Joi from "joi";

class Basedto {
    static schema = Joi.object({})

    static validate(data) {
        const { error, value } = this.schema.validate(data, {
            abortEarly: false,   // when first error appear stop the execution
            stripUnknown: true  // instead of my field any other field appear remove it
        })

        if (error) {
            const error = error.details.map((d) => d.message)
            return { error, value: null }
        }

       return { error: null, value }
    }
}

export default Basedto