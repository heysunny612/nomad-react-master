import { useForm } from 'react-hook-form';
export default function HookForm() {
  const { register, handleSubmit, formState } = useForm();
  const onVaild = (data: any) => {};
  console.log(formState.errors);
  return (
    <form
      onSubmit={handleSubmit(onVaild)}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <input
        type='text'
        {...register('email', { required: '이메일을 입력해주세요' })}
        placeholder='Email'
      />
      <input
        type='text'
        {...register('first_name', {
          required: '이름을 입력해주세요',
          minLength: { value: 5, message: 'Your password is too short' },
        })}
        placeholder='First Name'
      />
      <input
        type='text'
        {...register('last_name', { required: true })}
        placeholder='Last Name'
      />
      <input
        type='text'
        {...register('password', { required: true })}
        placeholder='Password'
      />
      <input
        type='text'
        {...register('password_check')}
        placeholder='Password Check'
      />
      <button>Add</button>
    </form>
  );
}
