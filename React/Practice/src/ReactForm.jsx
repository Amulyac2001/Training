import React from 'react'
import { useForm } from 'react-hook-form'; 

function ReactForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState:{errors,isSubmitting},
    }=useForm();

    function onSub(data){
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(onSub)}>
        <div>
            <label>First Name:</label>
            <input {...register('firstName',{
                required:true,minLength:{value:3,message:'Min len atleast 3'},
                pattern: {
                    value:/^[A-Za-z]+$/i,
                    value:'First Name is not as per the rules'
                }
                })} />
            {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
            <label>Last Name:</label>
            <input {...register('lastName',
                {
                    required:true,
                    minLength:{value:3,message:'Min len atleast 3'}
                }
            )} />  
            {errors.lastName && <p>{errors.lastName.message}</p>}  
            {/* input field ko form ka link kar diya ha by using register */}
        </div>
        <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" :"Submit"} />
    </form>
  )
}

export default ReactForm
