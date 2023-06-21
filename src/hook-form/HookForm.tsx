import { useForm } from 'react-hook-form';
export default function HookForm() {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <form>
      <input type='text' {...register('email')} placeholder='Email' />
      <input type='text' {...register('first_name')} placeholder='First Name' />
      <input type='text' {...register('last_name')} placeholder='Last Name' />
      <input type='text' {...register('password')} placeholder='Password' />
      <input
        type='text'
        {...register('password_check')}
        placeholder='Password Check'
      />
      <button>Add</button>
    </form>
  );
}
